const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b,c]= input
if(b>a && c>b) {
    console.log(1)
}else{
    console.log(0)
}