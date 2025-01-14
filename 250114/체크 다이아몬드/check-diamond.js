const fs = require('fs');


let n = Number(fs.readFileSync(0).toString().trim())

let str = '';

for(let i = 0; n>i; i++){
    str=''
    for(let j = 0;n-1-i>j;j++){
        str += " "
    }
    for(let j = 0;i>=j;j++){
        str += "* "
    }
    console.log(str)
}
//0 1 2 3
for(let i = 0; n-1>i; i++){
    str=''
    for(let j = 0; i>=j; j++){
        str += ' '
    }
    for(let k = 0; n-1-i>k; k++ ){
        str += '* '
    }
    console.log(str)

}