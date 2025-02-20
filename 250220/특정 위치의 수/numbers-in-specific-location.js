const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)


let r = 0;

for(let i = 0; input.length-1>=i;i++){
    if(i+1===3 || i+1===5 || i+1===10){
        r+=input[i];
    }
}
console.log(r)