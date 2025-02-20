const fs = require('fs')

const calculate = (odd, even)=> odd > even ? odd - even : even - odd


let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let odd = 0;
let even = 0
for(let i = 0; input.length-1>=i;i++){
    if((i+1)%2===0){
        even += input[i]
    }else{
        odd += input[i]
    }
}

const r = calculate(odd,even);
console.log(r)