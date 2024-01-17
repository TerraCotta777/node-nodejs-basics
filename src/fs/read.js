import fs from 'node:fs'

const directoryPath = new URL('./files/fileToRead.txt', import.meta.url).pathname
const read = async () => {
    fs.readFile(directoryPath, 'utf-8', (err, data) => {
        if (err) throw new Error('FS operation failed')
        else console.log(data)
    })
};

await read();