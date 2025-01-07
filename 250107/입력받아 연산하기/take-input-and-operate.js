const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n').map(Number);

const [a,b] = input;

console.log(a+87);
console.log( b % 10);