const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = ''

for(let i = 1; input >= i;i++){
    str = ''
    for(let j = 1;input >=j; j++){
        str +=String(j)
    }
    console.log(str)
}