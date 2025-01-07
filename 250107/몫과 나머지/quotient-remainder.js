const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b]= input;

console.log(`${parseInt(a/b)}...${a%b}`)