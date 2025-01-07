const fs= require('fs')
let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b] = input;

console.log(`${a} * ${b} = ${a*b}`);
console.log(`${a} / ${b} = ${Math.floor(a/b)}`);