const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

let str = ''

for(let i = n; i>0;i--){
    str = ''
    for(let j = 0; i > j;j++) {
        for(let k = 0; i>k; k++){
            str+='*'
        }
        str+=' '

    }
    console.log(str)

}