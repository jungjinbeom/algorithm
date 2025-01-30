const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim());

let str = ''
for(let i = 0; input>i; i++){
    str = ''
    for(let j = 0; i>j; j++){
        str += '  '
    }
    for(let j = input - i; j>0; j--){
        str += j + (' ')
    }
    console.log(str)
}