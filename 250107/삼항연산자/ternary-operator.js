const fs = require('fs');

let input = Number(fs.readFileSync(0).toString());

if(input===100){
    console.log('pass')
}else{
     console.log('failure')
}