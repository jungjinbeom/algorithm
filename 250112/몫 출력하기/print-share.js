const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let cnt = 0;
let idx = 0;
while(true){
    const n = input[idx];
    idx++;
    
    if(n % 2 === 0){
        console.log(n/2)
        cnt++;

        if(cnt===3){
            break;
        }else{
            continue
        }
    }
    if(n % 2 !==0){
        continue;
    }
}