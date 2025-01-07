const fs = require('fs');

let input = Number(fs.readFileSync(0).toString().trim());

let result = input;

if(result % 2 !== 0) result += 3

if(result % 3 === 0) result = result/3

console.log(result)