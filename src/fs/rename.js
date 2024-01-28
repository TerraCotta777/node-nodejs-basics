import fs from "node:fs/promises"

const oldName = new URL("./files/wrongFilename.txt", import.meta.url).pathname
const newName = new URL("./files/properFilename.md", import.meta.url).pathname

const rename = async () => {
    try {
        await fs.access(newName)
        throw new Error("FS operation failed")
    } catch (err) {
        if (err.code === "ENOENT") {
            try {
                await fs.access(oldName)
                await fs.rename(oldName, newName)
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

await rename()
