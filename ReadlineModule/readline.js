import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);


const signal = AbortSignal.timeout(1000);

signal.addEventListener('abort', () => {
  console.log('The food question timed out');
}, { once: true });

const res = await rl.question('What is your favorite food? ', { signal });
console.log(`Oh, so your favorite food is ${res}`);

rl.close();