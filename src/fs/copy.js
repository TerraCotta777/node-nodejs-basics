import fs from "node:fs/promises"

const originDirectoryPath = new URL("./files", import.meta.url).pathname
const copiedDirectoryPath = new URL("./files_copy", import.meta.url).pathname

const copy = async () => {
    try {
        await fs.access(copiedDirectoryPath)
        throw new Error("FS operation failed")
    } catch (err) {
        if (err.code === "ENOENT") {
            try {
                await fs.access(originDirectoryPath)
                await fs.cp(originDirectoryPath, copiedDirectoryPath, {
                    recursive: true,
                })
            } catch (err) {
                if (err.code === "ENOENT") {
                    throw new Error("FS operation failed")
                } else {
                    throw err
                }
            }
        } else {
            throw err
        }
    }
}

await copy()
