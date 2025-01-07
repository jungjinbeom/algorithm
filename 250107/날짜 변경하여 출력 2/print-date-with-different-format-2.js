const fs = require('fs');

let input = fs.readFileSync(0).toString().split('-');


const [m,d,y] = input
console.log(`${y}.${m}.${d}`)