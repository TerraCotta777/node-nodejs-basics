import fs from "node:fs/promises"

const directoryPath = new URL("./files", import.meta.url).pathname

const list = async () => {
    try {
        await fs.access(directoryPath)
        const fileNames = await fs.readdir(directoryPath)
        console.log(fileNames)
    } catch (err) {
        if (err.code === "ENOENT") {
            throw new Error("FS operation failed")
        } else {
            throw err
        }
    }
}

await list()
