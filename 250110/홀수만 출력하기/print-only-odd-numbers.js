const fs = require('fs')

let n = fs.readFileSync(0).toString().split('\n').map(Number);
const num = n.slice(1,n.length)

for(let i =0; num.length>i;i++){
    const number = num[i];
    if(number % 3 === 0 && number % 2 !== 0){
        console.log(number)
    }
}
