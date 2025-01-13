const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim());

let str = '';

for(let i = 0; n>i; i++){
    str = ''
    for(let j = 0; (2 * i) + 1>j; j ++){
        str+='*'
    }
    console.log(str)
}