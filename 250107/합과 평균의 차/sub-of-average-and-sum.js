const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b,c] = input;

const sum = a+b+c;
const avg = (a+b+c)/input.length;
const result = sum - avg;

console.log(sum)
console.log(avg)
console.log(result)