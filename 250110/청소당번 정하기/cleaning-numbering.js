const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim())

let r = [0,0,0];


for(let i = 1; n>=i;i++){
    if(i%12==0){ 
        r[2]+=1
        continue
    }
    if(i%3===0){
        r[1]+=1
        continue
    }
    if(i%2===0){
        r[0]+=1
        continue
    }
}

console.log(r.join(' '))