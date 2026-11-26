import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import { createServer } from 'node:http';

const root = new URL('./', import.meta.url);
const manifest = JSON.parse(await fs.readFile(new URL('capture-manifest.json', root), 'utf8'));
const resolveBody = (record) => new URL(record.body, root);
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');

if (process.argv[2] === 'verify') {
  const unique = new Map(manifest.records.filter(record => record.body).map(record => [record.body, record]));
  for (const [filename, record] of unique) {
    if (!/^bodies\/[0-9a-f]{64}$/.test(filename)) throw new Error('Invalid file ' + filename);
    const bytes = await fs.readFile(resolveBody(record));
    if (bytes.length !== record.bytes || digest(bytes) !== record.sha256 || filename !== 'bodies/' + record.sha256) {
      throw new Error('File failed verification ' + filename);
    }
  }
  console.log(`Verified ${unique.size} response bodies for ${manifest.records.length} captured URLs.`);
} else {
  const port = Number(process.argv[2] ?? 8765);
  const byUrl = new Map(manifest.records.map(record => [record.requested_url, record]));
  const { aliases } = JSON.parse(await fs.readFile(new URL('replay-aliases.json', root), 'utf8'));
  const missing = byUrl.get(new URL('/404', manifest.origin).href);
  const server = createServer(async (request, response) => {
    try {
      if (request.method !== 'GET' && request.method !== 'HEAD') {
        response.writeHead(405, { allow: 'GET, HEAD' }).end();
        return;
      }
      const parsed = new URL(request.url, manifest.origin);
      const key = new URL(parsed.pathname + parsed.search, manifest.origin);
      const record = byUrl.get(key.href);
      const alias = aliases[key.href];
      const redirect = record?.redirects?.[0] ?? (!record && alias && { to: alias.location, status: alias.status });
      if (redirect) {
        const target = new URL(redirect.to);
        const location = target.origin === manifest.origin ? target.pathname + target.search + target.hash : target.href;
        response.writeHead(redirect.status, { location }).end();
        return;
      }
      const content = record?.body ? record : missing;
      if (!content?.body) {
        response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('URL not captured');
        return;
      }
      const status = content === record ? (record.status ?? 404) : 404;
      const headers = { 'content-length': content.bytes };
      for (const header of ['content-type', 'content-language', 'content-disposition']) {
        if (content.headers[header]) headers[header] = content.headers[header];
      }
      const bytes = request.method === 'HEAD' ? undefined : await fs.readFile(resolveBody(content));
      response.writeHead(status, headers).end(bytes);
    } catch (error) {
      console.error(error);
      response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' }).end('Snapshot replay error');
    }
  });
  server.listen(port, '127.0.0.1', () => console.log(`Refactor snapshot available at http://127.0.0.1:${server.address().port}/`));
}
