const fs = require('fs');


let input = fs.readFileSync(0).toString()

const [num1, num2] = input.split(" ");

console.log(Number(num1) + Number(num2));