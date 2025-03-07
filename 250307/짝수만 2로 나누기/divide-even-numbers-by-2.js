const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n');


const arr = input[1].split(' ').map(Number);
let r = ''

arr.forEach(item=>{
    if(item%2===0){
        r += item/2+(' ')
    }else{
        r += item+(' ')
    }
})

console.log(r)


