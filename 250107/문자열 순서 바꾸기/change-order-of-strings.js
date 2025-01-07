const fs = require('fs');

let s = fs.readFileSync(0).toString().split('\n');

const arr = s.reverse();

arr.forEach(item=>console.log(item))

