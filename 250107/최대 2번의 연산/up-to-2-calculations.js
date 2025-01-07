const fs = require('fs');

let input = Number(fs.readFileSync(0).toString().trim());
let result = input 
if(result%2===0) result = Math.floor(result/2);

if(result%2!==0) result = (result+1)/2

console.log(result)