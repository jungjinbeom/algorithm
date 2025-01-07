const fs = require('fs');

let s = fs.readFileSync(0).toString().split('\n');




for(let i = s.length; i>0; i--){
    
    console.log(s[i-1])

}


