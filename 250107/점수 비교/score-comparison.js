const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n')

const [a,b] =input;

const [math,eng] = a.split(' ').map(Number);
const [math2,eng2] = b.split(' ').map(Number);

if(math > math2 && eng > eng2){
    console.log(1)
}else{
    console.log(0)
}