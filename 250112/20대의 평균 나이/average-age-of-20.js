const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let r = 0;
let idx = 0;
let cnt = 0
while(true){
    const n = input[idx];
    idx++
    if(19< n && 30>n){
        r += n;
        cnt++
        continue
    }
    break;
}

console.log((r/cnt).toFixed(2))