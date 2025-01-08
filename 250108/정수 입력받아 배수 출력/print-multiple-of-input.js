const fs = require('fs');

let input = Number(fs.readFileSync(0).toString());

let result = '';

for(let i = 1; 5>=i; i++){
        result += ((input * i) +(" "));
}

console.log(result)

