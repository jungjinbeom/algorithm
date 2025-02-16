const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let r = 0;

for(let i = 0; input.length-1>=i; i++){
   
    r += Number(input[i]);
}

console.log((r/input.length).toFixed(1))