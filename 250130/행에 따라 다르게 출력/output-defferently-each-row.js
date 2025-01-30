const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = '';
let cnt = 0;
for(let i = 1; input>=i; i++){
    str = ''
    for(let j = 0; input>j; j++){
        if(i % 2 !== 0){
            let num = cnt + 1
            str += num + (' ')
            cnt = num 
        }else{
            str += (cnt + 2) + (' ')
            cnt +=2
        }
    }
    console.log(str)
}