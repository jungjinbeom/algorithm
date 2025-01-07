const fs = require('fs');

let s = fs.readFileSync(0).toString().split('\n');

for(let i = s.length; i>0; i--){
    const string = s[i-1];
    if(string.length>=1 && string.length<=100){
        console.log(s[i-1]);
    }

}


