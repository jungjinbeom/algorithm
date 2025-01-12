const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n');

let idx = 0;

while(true){
    const [w,l,s] =input[idx].split(' ');
    const extent = Number(w) * Number(l);
    console.log(extent);
    idx++;
    
    if(s === "C"){
        break;
    }
}