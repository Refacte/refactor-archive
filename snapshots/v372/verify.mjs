import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = import.meta.dirname;
const checksumFile = 'SHA256SUMS';

async function filesUnder(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(path));
    else if (entry.isFile()) files.push(relative(root, path).replaceAll('\\', '/'));
    else throw new Error(`Unexpected entry ${path}`);
  }
  return files.sort();
}

const files = (await filesUnder(root)).filter((file) => file !== checksumFile);
const actual = [];
for (const file of files) {
  const bytes = await readFile(join(root, file));
  actual.push(`${createHash('sha256').update(bytes).digest('hex')}  ${file}`);
}
const checksums = `${actual.join('\n')}\n`;
if (process.argv.includes('--write')) {
  const { writeFile } = await import('node:fs/promises');
  await writeFile(join(root, checksumFile), checksums);
} else if (checksums !== await readFile(join(root, checksumFile), 'utf8')) {
  throw new Error('Snapshot inventory or SHA-256 checksum mismatch');
}
console.log(`Checked ${files.length} snapshot files.`);
