const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim())

let sumVal = 0
for(let i = 1; n>i; i++ ){
    if(n%i === 0 ){
        sumVal += i
    }
}

console.log(sumVal===n ? 'P':"N")