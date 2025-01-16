const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(' ');

let str =''

let idx = input.length -1
for(let i = idx; i>=0;i--){
    str+=input[i]
    
}
console.log(str)