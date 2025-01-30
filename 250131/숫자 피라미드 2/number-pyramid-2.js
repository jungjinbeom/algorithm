const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = ''
let cnt = 0
for(let i = 0; input>i; i++){
    str = ''
    for(let j = 0; i+1>j; j++){
        str += (cnt + 1) + (' ')
        cnt++ 
    }
    console.log(str)
}