const fs = require('fs');

let [start,end] = fs.readFileSync(0).toString().trim().split(' ').map(Number);


let r = 0
for(let i = start; end>=i; i++){
    let cnt = 0;
    for(let j = 1; i>=j;j++){
        
        if(i%j===0){
            
            cnt++
        }
    }
    if(cnt === 3){
        r++
    }
}
console.log(r)

