const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
const [a,b] = input

console.log(b, a)