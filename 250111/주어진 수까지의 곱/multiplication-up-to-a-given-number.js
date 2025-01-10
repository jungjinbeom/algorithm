const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let prod = 1

for(let i = a; b>=i; i++){
    prod *= i 
}
console.log(prod)