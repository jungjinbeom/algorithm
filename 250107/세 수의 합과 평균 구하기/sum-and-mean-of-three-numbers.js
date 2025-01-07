const fs = require('fs');

const input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b,c] = input;

console.log(a+b+c);
console.log(Math.floor((a+b+c)/input.length))