import fs from 'node:fs'
import zlib from 'node:zlib'

const originFilePath = new URL('./files/compressedFile.gz', import.meta.url).pathname
const destinationFilePath = new URL('./files/decompressedFile.txt', import.meta.url).pathname

const decompress = async () => {
    const readStream = fs.createReadStream(originFilePath)
    const writeStream = fs.createWriteStream(destinationFilePath)
    const gunzip = zlib.createGunzip()
    
    readStream.pipe(gunzip).pipe(writeStream)
};

await decompress();