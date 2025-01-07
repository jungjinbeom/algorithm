const fs = require('fs');

let input = Number(fs.readFileSync(0).toString());

const result = input * input;

if(input<5){
    console.log(result);
    console.log('tiny');
}else{
    console.log(result);
}