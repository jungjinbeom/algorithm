const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().split(' ').map(Number);

let result = ''

if(a > 0){
    for(let i = 0; b>i;i++){
        result += a
    }
    console.log(result)
}else{
    console.log(0)
}