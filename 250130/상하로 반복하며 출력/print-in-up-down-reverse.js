const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = ''
for(let i = 1; input>=i; i++){
    str = ''
    for(let j = 1; input>=j; j++){
        let num = input + 1
        
        if(j % 2 === 0){
            str += num - i
        } else{
            str += i
        }
        
    }
   console.log(str)
}