const fs = require('fs')

let input = Number(fs.readFileSync(0).toString().trim());

let str = '';

for(let i = 2; input>=i;i++){

    let flag = true;

    for(let j = 2; i>j;j++){
        if(i%j===0) flag = false
    }

    if(flag) str += i + (' ')
}
console.log(str)