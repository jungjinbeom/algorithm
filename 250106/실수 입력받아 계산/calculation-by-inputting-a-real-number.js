const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n');

const [a,b] =input

console.log((Number(a)+Number(b)).toFixed(2))