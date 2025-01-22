const fs = require('fs')

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = '';
for(let i = 1; a>=i; i++){
    str = ''
    for(let j = 1; b>=j; j++){
        str += `${i * j} `
    }
    console.log(str)
}
