const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().split(' ').map(Number);



let result = '';

let i;

for(i = a; b >= i;){

    if(i % 2 !== 0){
        result += i + (" ")
        i *= 2; 
        
    }

    if(i % 2 === 0){
        result += i + (" ")
        i += 3;
        
    }
}

console.log(result)