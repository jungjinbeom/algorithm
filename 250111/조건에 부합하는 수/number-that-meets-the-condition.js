const fs = require('fs')

let a = fs.readFileSync(0).toString().trim();

let r = ''
for(let i = 1; a>=i; i++){
    if(i%2===0 && i%4 !==0){
        continue
    }
    if(Math.floor(i/8)%2===0){
        continue
    }
    if(i%7 < 4){
        continue
    }
    r+= i+(' ')
}
console.log(r)