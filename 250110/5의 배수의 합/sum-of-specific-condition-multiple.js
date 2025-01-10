const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let s = a>b ? b : a;

let e = a>b ? a : b;


let sumVal = 0;
for(let i = s; e>=i; i++){
    if(i%5===0){
        sumVal+=i
    }
}
console.log(sumVal)