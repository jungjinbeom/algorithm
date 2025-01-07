const fs = require('fs');

let input = fs.readFileSync(0).toString().split('.')

const [y,m,d] = input;

console.log(`${m}-${d}-${y}`)
