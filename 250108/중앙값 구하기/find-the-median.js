const fs = require('fs');

let [a,b,c] = fs.readFileSync(0).toString().split(' ').map(Number).sort((a,b)=>a-b);

console.log(b)
