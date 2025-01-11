const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim());

let r = n;
let cnt = 0;
for(let i =1;n>=i;i++){
    r = Math.floor(r/i);
    cnt++
   
    if(r<=1){
        break;
    }
    
}
console.log(cnt)