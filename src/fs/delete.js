import fs from "node:fs"

const fileToDelete = new URL("./files/fileToRemove.txt", import.meta.url)
    .pathname

const remove = async () => {
    fs.unlink(fileToDelete, (err) => {
        if (err) throw new Error("FS operation failed")
    })
}

await remove()
