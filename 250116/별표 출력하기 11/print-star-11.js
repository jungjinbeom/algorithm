const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

let str = ''

for(let i =0; n>i;i++){
    str = ''
    for(let j = 0; n>j; j++){
        if(i === 0 || i === n-1 || j === 0 || j === n-1){
            str+=" *"
        }else{
            str += ' '
        }
    }
    console.log(str)
}