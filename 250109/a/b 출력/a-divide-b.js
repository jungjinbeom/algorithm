const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().split(' ').map(Number);

let result ='';

result += parseInt(a / b) + '.';

a %= b;

for(let i =0; 20>i; i++){
    a *= 10;
    result += parseInt(a /b);

    a %= b;
}

console.log(result)


