const parseEnv = () => {
    let output = ''
    for (let variable in process.env) {
        output += `RSS_${variable}=${process.env[variable]}; `
    }
    console.log(output)
};

parseEnv();