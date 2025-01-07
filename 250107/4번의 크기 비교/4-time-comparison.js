const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n');

let [a,rest] = input
a=Number(a);

const [b,c,d,e] = rest.split(' ').map(Number);

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