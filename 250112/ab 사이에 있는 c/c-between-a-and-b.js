const fs = require('fs');

let [a,b,c]= fs.readFileSync(0).toString().trim().split(' ').map(Number);
let r = 'NO'
for(let i=a; b>=i;i++){
    if(i%c===0){
       
        r ="YES"
        break;
    }
}

console.log(r)
