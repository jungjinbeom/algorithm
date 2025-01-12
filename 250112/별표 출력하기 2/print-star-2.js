const fs = require('fs');

let n = fs.readFileSync(0).toString().trim();

let str = '';

for(let i = 0; n>i; i++){
    str=''
    for(let j = n; j> i; j--){
       
        str +='* '
    }
    console.log(str)
}