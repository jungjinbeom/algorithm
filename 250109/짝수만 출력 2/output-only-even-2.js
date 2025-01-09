const fs = require('fs');

let [b,a] = fs.readFileSync(0).toString().split(' ').map(Number);

let result = '';

for(let i = b; i>=a; i--){
    if(i % 2 === 0){
        result += i+(' ');
    }
}

console.log(result)