const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let i = 0;

while(true){
    const n = input[i];
    if(!n) break;

    console.log(n)
    i++
}

