const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());


let sumVal = 0;
for(let i = n;100>=i;i++){
    sumVal += i
}
console.log(sumVal)