const fs = require('fs');

let input = fs.readFileSync(0).toString().split('-')

const [a,b] = input
console.log(a+b)