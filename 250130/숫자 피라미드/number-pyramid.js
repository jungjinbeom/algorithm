const fs = require('fs');

let input = Number(fs.readFileSync(0).toString().trim())

let str = ''
for(let i = 0; input > i; i++){
    str = ''
    for(let j = 0; i+1>j; j++){
        str += String(i+1) + (' ')
    }
    console.log(str)
}