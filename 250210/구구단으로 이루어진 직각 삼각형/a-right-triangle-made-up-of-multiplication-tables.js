const fs = require('fs')
let input = Number(fs.readFileSync(0).toString().trim())


let str = ''
for(let i = 1; input>=i;i++){
    str =''
    for(let j = 1; ((input+1)-i)>=j;j++){
        if(j === ((input+1)-i)){
            str += `${i} * ${j} = ${i * j}`
        }else{
            str += `${i} * ${j} = ${i * j} / `
        }
        
    }
    console.log(str)
}