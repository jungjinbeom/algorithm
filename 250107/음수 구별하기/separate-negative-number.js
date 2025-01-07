const fs = require('fs');

let input = Number(fs.readFileSync(0).toString());

if(input<1){
    console.log(input);
    console.log('minus');
}else{
    console.log(input);
}