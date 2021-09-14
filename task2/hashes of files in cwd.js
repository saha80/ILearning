const fs = require('fs');
const crypto = require('crypto');

for (const fn of fs.readdirSync(process.cwd())) {
    if (!fs.lstatSync(fn).isFile()) {
        continue;
    }
    const hash = crypto.createHash('sha3-256').update(fs.readFileSync(fn)).digest();
    console.log(fn, hash.toString('hex'));
}