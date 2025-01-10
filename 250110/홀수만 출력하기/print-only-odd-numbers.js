const fs = require('fs')

let n = fs.readFileSync(0).toString().split('\n').map(Number);

for(let i =0; n.length>i;i++){
    const number = n[i];
    if(number % 3 === 0 && number % 2 !== 0){
        console.log(number)
    }
}
