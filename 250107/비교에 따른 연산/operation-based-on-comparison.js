const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().split(' ').map(Number);

if(a>b){
    console.log(a*b)
}else{
    console.log(Math.floor(b/a))
}