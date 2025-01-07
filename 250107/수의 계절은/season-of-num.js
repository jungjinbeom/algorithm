const fs = require('fs');

let s = Number(fs.readFileSync(0).toString().trim());

if(s>=3 && s<=5){
    console.log('Spring')
}else if(s>=6 && s<=8){
    console.log('Summer')
}else if(s>=8 && s<=11){
    console.log('Fall')
}else{
    console.log('Winter')
}
