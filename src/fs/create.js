import fs from "node:fs"

const filesPath = new URL("./files/fresh.txt", import.meta.url).pathname

const create = async () => {
    if (fs.existsSync(filesPath)) {
        throw new Error("FS operation failed")
    } else {
        fs.writeFile(filesPath, "I am fresh and young")
    }
}

await create()
