const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let r = [];

for(let i = 0; input.length-1 >= i; i++){
   
    if(!Number(input[i])){
        break;
    }else{
        r = [Number(input[i]),...r]
    }
}


console.log(r.join(' '))

