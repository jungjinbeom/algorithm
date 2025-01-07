const fs = require('fs');

let [l,r]= fs.readFileSync(0).toString().split('\n').map(Number);

if(l>=1 && r>=1){
    console.log('High')
}else if(l>=0.5 && r>=0.5){
    console.log('Middle')
}else{
    console.log('Low')
}