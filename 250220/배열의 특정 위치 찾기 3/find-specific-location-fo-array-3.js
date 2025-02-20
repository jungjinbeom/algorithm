const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let r = 0;

let arr = [];

for(let i = 0; input.length-1>=i;i++){
    if(input[i] === 0) {
        
        r += (arr[arr.length-1] +  arr[arr.length-2] +  arr[arr.length-3]);
        break;
    }
    arr.push(input[i])
}



console.log(r)
