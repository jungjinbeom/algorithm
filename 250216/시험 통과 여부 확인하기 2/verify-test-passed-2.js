const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n')

const n = input[0]

let cnt = 0
let r = 0

for(let i = 1; n>=i;i++ ){
    r = 0
    const score = input[i].split(' ')
    for(let j = 0; score.length-1>=j;j++){
        r += Number(score[j]);
    }

    if((r/4)>=60){
        console.log('pass')
        cnt++
    }else{
        console.log('fail')
    }
}
console.log(cnt)