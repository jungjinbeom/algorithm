const fs = require('fs');

let [n,m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';
for(let i = 0; n>i; i++){
    str = '';
    for(let j = 0; m>j; j++){
        str += '* '
    }
    console.log(str)
}