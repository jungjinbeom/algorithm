const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let r = 0;

let arr = [];
for(let i = 0; input.length-1>=i;i++){
    if(input[i]===0) break;

    arr.push(input[i])
}

for(let i = 1; 3>=i;i++){
     r += arr[arr.length-i];
}

console.log(r)