const parseArgs = () => {
    const args = process.argv.slice(2)

    let options = {}

    for (let i = 0; i < args.length; i += 2) {
        const prop = args[i].replace("--", "")
        const value = args[i + 1]
        options[prop] = value
    }

    for (let [key, value] of Object.entries(options)) {
        console.log(`${key} is ${value}`)
    }
}

parseArgs()
