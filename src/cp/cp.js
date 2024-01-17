import { spawn } from 'child_process';

const scriptPath = new URL('./files/script.js', import.meta.url).pathname;

const spawnChildProcess = async (args) => {
    const child = spawn('node', [scriptPath, ...args], { stdio: ['pipe', 'pipe', 'inherit', 'ipc'] });
    
    process.stdin.pipe(child.stdin);
    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
