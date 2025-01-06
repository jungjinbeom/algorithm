const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n');

const [a,b,c]= input

console.log(Number(a).toFixed(3))
console.log(Number(b).toFixed(3))
console.log(Number(c).toFixed(3))
