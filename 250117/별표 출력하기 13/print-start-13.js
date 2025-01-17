const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim())

let str = ''
for(let i = 0; n>i; i++){
    str = ''
        if(i%2===0){//짝수
            for(let j = 0;  j < n - i/2; j++){   
                str+="* "
            }
        }else{//홀수
            for(let j = 0;  j < (i/2); j++){
                str+="* "
            }
        }
    console.log(str) 
}

for(let i = n; i>0; i--){
    str = ''
        if(i%2===0){//짝수
            for(let j = 0;  j < (i/2); j++){   
                str+="* "
            }
        }else{//홀수
            for(let j = 0;  j < n - i/2; j++){
                str+="* "
            }
        }
    console.log(str) 
}