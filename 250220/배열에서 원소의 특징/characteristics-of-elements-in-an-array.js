const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let r = 0
const arr = []
for(let i = 0; input.length-1>=i;i++){
    if(input[i]%3===0){
        r+= arr[arr.length-1];
        break;
    }
    arr.push(input[i])
}
console.log(r)