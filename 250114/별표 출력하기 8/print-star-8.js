const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim())

let str = '';
for(let i = 1; n>=i;i++){
    str = ''

    if(i % 2 !== 0){
        str +="* "
        console.log(str)
        continue
    }
    for(let j = 0; i>j; j++){
        str +="* "
    }

    console.log(str)
}