const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b] = input;

let res = 0 
if(a>=90 && b>=95){
    res = 100000;
}else if(a>=90 && b<95 && b>=90){
    res = 50000;
}else{
    res = 0
}

console.log(res)