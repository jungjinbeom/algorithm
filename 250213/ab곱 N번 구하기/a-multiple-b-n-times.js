const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split('\n')
const n = Number(input[0]);


for(let i = 1; n>=i; i++){
    let x = input[i].split(' ');
    let a = Number(x[0]);
    let b = Number(x[1]);
    
    let sum = 1;

    for(let i = a; i<=b; i++){
        
        sum *=i
    }
    console.log(sum)
}