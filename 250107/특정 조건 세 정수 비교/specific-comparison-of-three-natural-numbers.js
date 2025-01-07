const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);
const [a,b,c] = input;

let result = 0
let result2 = 0

if(a<=b && a<=c){
   result += 1
}else{
   result += 0
}

if(a===c && a===b){
   result2+=1
}else{
   result2+=0
}
console.log(result, result2)
