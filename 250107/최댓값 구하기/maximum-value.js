const fs = require('fs');

let input = fs.readFileSync(0).toString().split(' ').map(Number);

const [a,b,c]=input;

if(a>=b){
    if(a>=c){
        console.log(a)
    }else{
        console.log(c)
    }
    
}else{
    if(b>=c){
        console.log(b)
    }else{
        console.log(c)
    }
}
