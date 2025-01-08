const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

let i = 3;
let result = ''
while(n>=i){
    result += i+(' ');
    i+=3
}
console.log(result)