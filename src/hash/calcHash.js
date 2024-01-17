import crypto from 'crypto';
import fs from 'fs';

const fileToCalculateHashFor = new URL('./files/fileToCalculateHashFor.txt', import.meta.url).pathname;
const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(fileToCalculateHashFor);

    input.on('readable', () => {
        const data = input.read();
        if (data) {
            hash.update(data);
        } else {
            console.log(hash.digest('hex'));
        }
    })
};

await calculateHash();