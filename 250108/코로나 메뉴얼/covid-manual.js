const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n');
const [a,b,c] = input

let [r1,b1] = a.split(' ');
let [r2,b2] = b.split(' ');
let [r3,b3] = c.split(' ');

let count = 0;

if(b1>=37 && r1==="Y"){
    count +=1
}

if(b2>=37 && r2==="Y"){
    count +=1
}

if(b3>=37 && r3==="Y"){
    count +=1
}

let result = count >=2 ? "E" : "N"
console.log(result)