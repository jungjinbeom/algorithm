const fs = require('fs')

let [a,n] = fs.readFileSync(0).toString().split(' ').map(Number);

let result = (a + n);

for(let i = 0; n>i; i++){
    console.log(result)
    result += n;

}

