const fs = require('fs');


let n = Number(fs.readFileSync(0).toString().trim());


let str = ''

for(let i = 0;n>i;i++){
    str = ''
    for(let j = 0; n - (i + 1) > j; j++){
        str += ' '
    }
    for(let k = 0; 2 * i +1 > k; k++){   
        str += '*'
        
    }
    console.log(str)
    
}

for(let i = 0;n>i;i++){
    str = ''
    for(let j = 0;  (i + 1) > j; j++){
        str += ' '
    }
    for(let k = 0; (2 * n) - (2 * i) -3> k; k++){   
        str += '*'
        
    }
    console.log(str)
    
}