const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = ''

for(let i = 0; input>i;i++){
    str = ''
    for(let j = 0; input>j;j++){
        str +=`${i * 2 + j * 2 +11} `
    }
    console.log(str)
}