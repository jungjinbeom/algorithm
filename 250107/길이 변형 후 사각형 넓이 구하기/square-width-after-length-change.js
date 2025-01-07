const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);

let [a, b] = input

a+=8;
b*=3;
const num3 = a*b;

console.log(a);
console.log(b);
console.log(num3);