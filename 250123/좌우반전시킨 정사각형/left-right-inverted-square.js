const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for(let i = 1; n>=i; i++){
    str = ''
    for(let j = 0; n>j; j++){
        str+=`${n * i  - j * i} `
    }
    console.log(str)
}
