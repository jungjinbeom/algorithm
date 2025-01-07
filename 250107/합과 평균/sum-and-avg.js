const fs = require('fs')

let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b] = input;
const result = (a+b)/input.length;

console.log(a+b, result.toFixed(1));