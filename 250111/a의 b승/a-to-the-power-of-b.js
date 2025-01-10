const fs = require('fs')

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let prod = 1
for(let i = 1; b>=i; i++){
    prod *= a
}
console.log(prod)