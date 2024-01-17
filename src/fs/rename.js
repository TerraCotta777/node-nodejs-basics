import fs from "node:fs"

const oldName = new URL("./files/wrongFilename.txt", import.meta.url).pathname
const newName = new URL("./files/properFilename.md", import.meta.url).pathname

const rename = async () => {
    if (fs.existsSync(newName)) {
        throw new Error("FS operation failed")
    } else {
        fs.rename(oldName, newName, (err) => {
            if (err) new Error("FS operation failed")
        })
    }
}

await rename()
