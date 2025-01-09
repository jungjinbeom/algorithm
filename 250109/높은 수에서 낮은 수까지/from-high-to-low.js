const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().split(' ').map(Number);

let n = a>b ? a : b ;
let n2 = a>b ? b : a ;
let result = '';

for(let i = n; i>=n2; i --){
    result += i + (' ')
}
console.log(result)
