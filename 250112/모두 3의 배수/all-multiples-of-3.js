const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let r = 1
for(let i = 0; n.length>i;i++){
    const number = n[i];
    if(number%3 !== 0){
        r=0
    }
}

console.log(r)