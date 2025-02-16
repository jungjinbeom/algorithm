const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)



let cnt = 0
let r = 0
for(let i = 0; input.length>=i;i++){
    if(!Number(input[i])){
        break;
    }else{

        r += Number(input[i])
        cnt++
    }
}

console.log(r, (r/cnt).toFixed(1))