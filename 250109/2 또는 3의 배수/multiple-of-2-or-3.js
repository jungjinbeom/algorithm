const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim())

let r = ''
for(let i = 1;n>=i;i++ ){
    if(i%2===0 || i%3===0){
        r += 1+(' ')
    }else{
        r += 0+(' ')

    }
}
console.log(r)