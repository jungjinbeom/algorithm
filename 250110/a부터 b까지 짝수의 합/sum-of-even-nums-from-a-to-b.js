const fs = require('fs')

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let sumVal = 0

for(let i = a; b>=i; i++){
    if(i%2===0){
        sumVal+=i
    }
}

console.log(sumVal)
