const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = ''
for(let i = input; i>0;i--){
    str = ''
    for(let j = input; j>0;j--){
        str +=`(${i},${j}) `
    }
    console.log(str)
}