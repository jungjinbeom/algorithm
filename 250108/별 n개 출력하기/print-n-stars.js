const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

let i = 0;
while(n>i){
    i++
    console.log('*')
}