const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n')

for(let i = 0; input.length>i; i++){
    const string = input[i];
    if(Number(string)){
        console.log(Number(string).toFixed(2));
        continue;
    }
    console.log(string)
}

