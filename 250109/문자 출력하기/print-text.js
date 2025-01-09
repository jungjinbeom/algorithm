const fs = require('fs');

let s = fs.readFileSync(0).toString().trim();

let result = '';
for(let i = 0; 8>i; i++){
    result += s 
}
console.log(result)