const fs = require('fs');

let [c,n] = fs.readFileSync(0).toString().split(' ')

 n = Number(n);
 let result = '';

if(c==="A"){
    for(let i = 1; n>=i;i++){
        result+= i+(' ')

    }
    console.log(result)
}

if(c==="D"){
    for(let i = n; i>0 ;i--){
        result+= i+(' ')

    }
    console.log(result)
}

