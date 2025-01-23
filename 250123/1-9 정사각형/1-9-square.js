const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = '';
let cnt = 1
for(let i = 0; input>i; i++){
    str = ''
    for(let j = 0; input>j; j++){
        str+=cnt 
        cnt = cnt >= 9 ? 1 : cnt+1    
    }
    console.log(str)
}