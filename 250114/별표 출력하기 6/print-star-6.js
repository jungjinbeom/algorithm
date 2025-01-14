const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim());

let str = ''
for(let i = 0; n>i; i++){
    str = ''
    for(let j = 0; i>j; j++){
        str += '  '
    }
    for(let j = 0; (2 * n) - (2 * i) - 1 > j; j++){
        str += '* '
    }
  
  
    console.log(str)
}
for(let i = 0; n-1>i; i++){
    str = ''
  for(let j = 0; n-i-2>j; j++){
        str += '  '
    }
    for(let j = 0; 3+(2*i)>j; j++){
        str += '* '
    }
    console.log(str)
}
    
    





    
    
    
