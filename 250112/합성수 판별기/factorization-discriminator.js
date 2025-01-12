const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())


let r = "N"
for(let i =2; (n-1)>=i;i++){
    if(n%i===0){
        r ="C"
    }
}

console.log(r)