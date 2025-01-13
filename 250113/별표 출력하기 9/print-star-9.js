const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim());

let str = ''

for(let i = 0; n>i; i++){
    str = '';
    //4-0-1=3
    //4-1-1=2
    //4-2-1=1

    for(let j = 0; n-i-1>j; j++){
        str +="  "
    }
    //2*0+1=0
    //2*1+1= 3
    //2*2+1= 5
    //2*3+1= 7
    for(let k = 0; 2 * i + 1 > k; k++){
        str +="* "
    }
    console.log(str)
}
