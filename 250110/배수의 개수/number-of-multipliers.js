const fs = require('fs')

let n = fs.readFileSync(0).toString().split('\n').filter(item=>item).map(Number)

let r = 0;
let r2 =0;

for(let i = 0; n.length>i;i++){
   
    if(n[i]%3===0){
        r++
    }
    if(n[i]%5===0){
        //console.log(n[i])
        r2++
    }
}

console.log(r, r2)