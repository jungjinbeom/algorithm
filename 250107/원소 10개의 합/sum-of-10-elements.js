const fs = require('fs')

let input = fs.readFileSync(0).toString().split(' ').map(Number);

let result = 0;

input.forEach(num=>result+=num);

console.log(result);