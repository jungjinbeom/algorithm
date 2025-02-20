const fs = require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ')

let str ='';

for(let i = 0; input.length-1>=i;i++){
    if(i+1===2 || i+1===5 || i+1===8 ){
        str += input[i]+(' ')
    }
}
console.log(str)