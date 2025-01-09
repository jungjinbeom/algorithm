const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim())

let r = ''

for(let i = 1; n >= i; i++){
    if(i % 3 === 0 || i % 10 === 3 || i % 10 === 6 || i % 10 === 9 || parseInt(i / 10) === 3 ||  parseInt(i / 10) === 6 ||  parseInt(i / 10) === 9){
        r += 0 + (' ');
    }else{
        r += i + (' ');
    }
}
console.log(r)