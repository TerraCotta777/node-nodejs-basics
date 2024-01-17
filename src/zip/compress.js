import fs from 'node:fs'
import zlib from 'node:zlib';

const originFilePath = new URL('./files/fileToCompress.txt', import.meta.url).pathname
const destinationFilePath = new URL('./files/compressedFile.gz', import.meta.url).pathname

const compress = async () => {
    const readStream = fs.createReadStream(originFilePath, { encoding: 'utf-8' })
    const writeStream = fs.createWriteStream(destinationFilePath, { encoding: 'utf-8' })
    const gzip = zlib.createGzip()
    
    readStream.pipe(gzip).pipe(writeStream)
};

await compress();