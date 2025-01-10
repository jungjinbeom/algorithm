const fs =require('fs')

let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sumVal = 0;
let cnt = 0

for(let i = 0; n.length>i; i++){
    if(n[i]>=0 && n[i]<=200){
        sumVal += n[i];
        cnt++
    }
}
console.log(sumVal, (sumVal/cnt).toFixed(1))