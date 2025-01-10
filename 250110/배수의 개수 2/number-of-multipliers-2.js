const fs = require('fs');

let n = fs.readFileSync(0).toString().split('\n').map(Number);

let cnt = 0


for(let i = 0; n.length>i; i++){
    const num = n[i];
    if(num % 2 === 1){
        cnt ++
    }
}
console.log(cnt)