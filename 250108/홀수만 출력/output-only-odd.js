const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().split(' ').map(Number);

let result = ''
for(let i = a; b>=i; i+=2){
    result+= i + (' ')
}
console.log(result)