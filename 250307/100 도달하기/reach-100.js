const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim());


let prev = 1;
let next = n;

let arr = [1,n];

while(true){
  const r = prev + next 

    if(r > 100){ 
        arr.push(r);
        break;
    }
    arr.push(r);
    prev = next; 
    next = r

    
}
console.log(arr.join(' '))
