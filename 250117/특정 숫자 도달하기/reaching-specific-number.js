const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);


let result = 0
let cnt = 0
for(let i = 0;input.length>i;i++){
    const n = input[i];
    if(n>=250){
        break;
    }else{
        result += n;
        cnt++
    }
}

console.log(result, (result/cnt).toFixed(1))

