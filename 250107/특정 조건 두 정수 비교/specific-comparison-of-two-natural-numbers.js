const fs =require('fs');

let [a,b] = fs.readFileSync(0).toString().split(' ').map(Number);
let result = 0

let result2 = 0
if(b>a) {
    result = 1
}else{
    result = 0
}

if(b===a) {
      result2 = 1
    
}else{
      result2 = 0
}

console.log(result, result2)
