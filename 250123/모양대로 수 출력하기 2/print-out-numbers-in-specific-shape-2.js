const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = ''
let cnt = 2
for(let i = 0; input>i; i++){
    str = ''
    for(let j = 0; input>j; j++){
        str += cnt + (' ')
        cnt = cnt>=8 ? 2 : cnt + 2
    }
    console.log(str)
}