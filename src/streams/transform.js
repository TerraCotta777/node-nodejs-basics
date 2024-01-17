import { Transform } from "stream"

const transform = async () => {
    const stream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split(" ").reverse().join(" "))
        },
    })

    process.stdin.pipe(stream)
    process.stdin.resume()

    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
}

await transform()
