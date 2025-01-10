const fs = require('fs');


let n = fs.readFileSync(0).toString().trim().split('\n').map(Number);



let sumVal = 0
for(let i = 0; n.length>=i; i++){
    if(i){
        if(n[i] % 2 !==0 && n[i] % 3 === 0){
            sumVal += n[i]
        }
    }
}
console.log(sumVal)