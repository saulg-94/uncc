import fs from 'fs'


const content = fs.readFileSync('./text.txt')
console.log(content);

console.log(content.toString('utf8'));
