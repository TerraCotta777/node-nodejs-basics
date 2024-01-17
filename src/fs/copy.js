import fs from "node:fs"

const originDirectoryPath = new URL("./files", import.meta.url).pathname
const copiedDirectoryPath = new URL("./files_copy", import.meta.url).pathname

const copy = async () => {
    if (fs.existsSync(copiedDirectoryPath) || !fs.existsSync(originDirectoryPath)) {
        throw new Error("FS operation failed")
    } else {
        fs.cpSync(originDirectoryPath, copiedDirectoryPath, {
            recursive: true,
        })
    }

}

await copy()
