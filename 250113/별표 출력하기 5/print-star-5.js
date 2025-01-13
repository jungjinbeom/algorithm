const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim());

let str = ''

for(let i = n; i>=1; i--){
    str = ""
    for(let j = 1; j<=i;j++){
        for(let k = 1; k<=i; k++){
            str+="*"
        }
        str += ' ';

    }
    console.log(str)
}