const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().split(' ').map(Number);



let result = '';

let i;

for(i = a; b >= i;){

    if(i % 2 !== 0){
        i *= 2; 
        result += i + (" ")
    }

    if(i % 2 === 0){
        i += 3;
        result += i + (" ")
    }
}

console.log(result)