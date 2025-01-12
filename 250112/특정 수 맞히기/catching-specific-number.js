const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;

while(true){
    const n = input[idx];
    idx++
    
    if(n > 25){
        console.log('Lower')
        continue
    }

    if(25 > n){
        console.log('Higher')
        continue
    }

    if(25 === n){
        console.log('Good')
        break;
    }
 }