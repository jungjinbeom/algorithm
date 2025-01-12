const fs = require('fs')

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);


let r = 0
for(let i = a; b>=i; i++){
    if(1920%i===0 && 2880 % i === 0){
        r =1
    }
}

console.log(r)

