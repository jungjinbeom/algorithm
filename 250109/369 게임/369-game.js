const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim())

let r = ''

console.log(31 % 10 )
for(let i = 1; n >= i; i++){
    if(i % 3 === 0 || i % 10 ===3 || i % 10 === 6 || i % 10 === 9 || i / 10 === 3 || i / 10 === 6 || i / 10 === 9){
        r += 0 + (' ');
    }else{
        r += i + (' ');
    }
}
console.log(r)