const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b,c]=input;

if(a>=b && a>=c){
    console.log(a)
}

if(b>=a && b>=c){
    console.log(b)
}

if(c>=a && c>=b){
    console.log(c)
}