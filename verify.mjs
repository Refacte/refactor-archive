import fs from 'node:fs';
import crypto from 'node:crypto';
const lines=fs.readFileSync(new URL('./SHA256SUMS',import.meta.url),'utf8').trim().split('\n');
let n=0;for(const line of lines){const m=line.match(/^([0-9a-f]{64})  (.+)$/);if(!m)throw Error('Invalid checksum line');const b=fs.readFileSync(new URL('./'+m[2],import.meta.url));if(crypto.createHash('sha256').update(b).digest('hex')!==m[1])throw Error('Checksum mismatch: '+m[2]);n++;}console.log('Verified '+n+' files.');
