const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

let r = 1
let r2 = 0
for(let i = 1; 10>=i;i++){
    r *= i;
    if(r>n){
        r2+=i
        break;
    }
}

console.log(r2)