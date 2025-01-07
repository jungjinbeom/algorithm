const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n');

const [a,rest] = input
const [b,c,d,e] = rest.split(' ');

if(a>b){
    console.log(1)
}else{
    console.log(0)
}

if(a>c){
    console.log(1)
}else{
    console.log(0)
}

if(a>d){
    console.log(1)
}else{
    console.log(0)
}

if(a>e){
    console.log(1)
}else{
    console.log(0)
}