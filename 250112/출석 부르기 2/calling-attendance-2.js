const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;

while(true){
    const n = input[idx];
    idx++
    
    if(n === 1){
        console.log('John')
        continue
    }
    if(n === 2){
        console.log('Tom')
        continue
    }
    if(n === 3){
        console.log('Paul')
        continue
    }
    if(n === 4){
        console.log('Sam')
        continue
    }
    console.log('Vacancy')
    break;
}