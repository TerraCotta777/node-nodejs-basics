import fs from "node:fs"

const filePath = new URL('./files/fileToRead.txt', import.meta.url).pathname

const read = async () => {
    const stream = fs.createReadStream(filePath, { encoding: 'utf-8' })
    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
}

await read()
