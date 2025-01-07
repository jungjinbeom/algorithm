const fs = require('fs');

let input = fs.readFileSync(0).toString().split('\n');

const [a,b]= input;

const [age, gender] = a.split(' ')
const [age2, gender2] = b.split(' ')

let result = 0;

if(age >=19 && gender ==="M"){
    result=1

}

if(age2 >=19 && gender2 ==="M"){
    result=1

}

console.log(result)