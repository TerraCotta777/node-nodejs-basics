import fs from "node:fs/promises"

const filesPath = new URL("./files/fresh.txt", import.meta.url).pathname

const create = async () => {
    try {
        await fs.access(filesPath);
        throw new Error("FS operation failed");
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(filesPath, "I am fresh and young");
        } else {
            throw err;
        }
    }
}

await create()
