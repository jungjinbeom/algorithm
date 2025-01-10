const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);


let r = 0
for(let i = a; b>=i; i++){
    r+=i
}

console.log(r)