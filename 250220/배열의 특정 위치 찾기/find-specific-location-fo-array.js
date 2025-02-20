const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);


let r = 0
let r2 = 0;
let cnt = 0;

for(let i = 0; input.length-1>=i;i++){
    if((i+1) % 2 === 0){
        r += input[i]
    }
    if((i+1) % 3 === 0){
        r2 += input[i]
    }
}


console.log(r,(r2/3).toFixed(1))