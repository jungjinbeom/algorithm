const fs = require('fs');

let [a, b] = fs.readFileSync(0).toString().split(' ').map(Number);



let result = ''

let i = a; 
while(b >= i){ 
    result += i + (" ");
    if(i % 2 !== 0){
        i *=  2; 
        continue;
    }
    if(i % 2 === 0){
        i += 3;
        continue;
    }    
}

console.log(result)