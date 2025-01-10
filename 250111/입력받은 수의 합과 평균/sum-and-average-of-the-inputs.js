const fs = require('fs');

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);
let sumVal = 0
for(let i = 1; n[0]>=i; i++){
    const number = n[i];
    sumVal += number 
}
console.log(sumVal, (sumVal/n[0]).toFixed(1))