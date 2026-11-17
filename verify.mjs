import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const lines = fs.readFileSync(path.join(root, 'SHA256SUMS'), 'utf8').trim().split('\n');
for (const line of lines) {
  const match = line.match(/^([0-9a-f]{64})  (.+)$/);
  if (!match) throw new Error('Invalid checksum line');
  const filename = path.resolve(root, match[2]);
  if (!filename.startsWith(root + path.sep)) throw new Error('Invalid archive path');
  const actual = crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');
  if (actual !== match[1]) throw new Error('Checksum mismatch for ' + match[2]);
}
console.log('Verified ' + lines.length + ' files.');
