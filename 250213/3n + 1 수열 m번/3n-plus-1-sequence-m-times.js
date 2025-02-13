const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const m = input[0];


for(let i = 1; m>=i;i++){
    let n = input[i];
    let r = n;
    let cnt = 0;
    while(r!==1){
        if(r%2!==0){
            r = ((r*3)+1);
        }else{
            r = r/2;
        }
        cnt ++;
    }
    console.log(cnt)
}