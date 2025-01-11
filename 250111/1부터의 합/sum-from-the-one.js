const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim())

let sum = 0;
let r = 0 
for(let i =1; 100>=i;i++){
    sum += i
    if(sum>=n){
        r +=i
        break;
    }
    
}

console.log(r)