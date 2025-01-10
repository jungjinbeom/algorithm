const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim())

let r = ''
for(let i = 1; n>=i; i++){

    if(i % 2 === 0){
        continue;
    }
    if(i % 3 === 0 && i % 9 !== 0){
        continue;
    }
    
    if( i % 10 === 5){
         continue;
    }

    r+= i+(' ')
}
console.log(r)