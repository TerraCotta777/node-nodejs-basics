import fs from "node:fs"

const filePath = new URL("./files/fileToWrite.txt", import.meta.url).pathname
const write = async () => {
    const stream = fs.createWriteStream(filePath)
    process.stdin.pipe(stream)

    process.stdin.resume()
}

await write()
