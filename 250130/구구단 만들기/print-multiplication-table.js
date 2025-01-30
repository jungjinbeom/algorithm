const fs = require('fs')

let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let str = '';

for(let i = 1; 9>=i; i++){
    str = ''
    for(let j = b; j>=a; j-=2){
        if(a !== j){
            str += `${j} * ${i} = ${j * i} / `
        }else{
             str += `${j} * ${i} = ${j * i}`
        }
       
    }
    console.log(str)
}