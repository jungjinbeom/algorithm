const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let r = 0
for(let i = 1; n>=i;i++){
    r = 0;
    const [a,b] = input[i].split(' ').map(Number);
    
    for(let j = a; b>=j; j++){
        if(j % 2===0){
           r += j 
        }
    }
    console.log(r)
}