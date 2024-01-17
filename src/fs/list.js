import fs from 'node:fs'

const directoryPath = new URL("./files", import.meta.url).pathname

const list = async () => {
    const fileNames = fs.readdirSync(directoryPath, (err) => {
        if (err) throw new Error("FS operation failed")
    })
    console.log(fileNames)
};

await list();