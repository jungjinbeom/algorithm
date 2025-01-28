const fs = require('fs')

let input = fs.readFileSync(0).toString().trim()


let str = ''
let cnt = 9
for(let i = 0; input>i;i++){
    str = ''
    for(let j = 0; input>j;j++){
        str += cnt

        if(cnt === 1){
             cnt = 9
        }else{
            cnt --
        }
        
    }
    console.log(str)
}