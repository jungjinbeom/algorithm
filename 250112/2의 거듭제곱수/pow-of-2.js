const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim())

let cnt = 1;
let r = n
while(true){

    if(r/2===1){
        break;
    }

    cnt++
    r = r/2
    
}

console.log(cnt)