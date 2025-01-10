const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sumVal = 0;

let cnt = 0 
for(let i = a; b>=i; i++){
    if(i%5===0){
        sumVal += i
        cnt++
        continue
    }
    if(i%7===0){
        sumVal += i
        cnt++
        continue
    }
}

console.log(sumVal, (sumVal/cnt).toFixed(1))