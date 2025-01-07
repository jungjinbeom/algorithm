const fs = require('fs');

let [a,b]= fs.readFileSync(0).toString().split(' ').map(Number);

const num1 = a+b;
const num2 = a-b;
const result = num1/num2
console.log(result.toFixed(2))