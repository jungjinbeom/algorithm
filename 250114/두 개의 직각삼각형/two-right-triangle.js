const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());


let str = ' ';

for(let i = n ; i>0; i--){
    str = '';
    for(let j = 0; i>j; j++ ){
        str+='*'
    }
    for(let k = 0;n-i>k;k++ ){
        str+=' '
    }
    for(let k = 0;n-i>k;k++ ){
        str+=' '
    }
    for(let j = 0; i>j; j++ ){
        str+='*'
    }
    console.log(str)
}