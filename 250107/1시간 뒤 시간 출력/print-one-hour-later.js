const fs = require('fs');


let input = fs.readFileSync(0).toString().split(':');

const [h,m]= input;

console.log(`${Number(h)+1}:${m}`)