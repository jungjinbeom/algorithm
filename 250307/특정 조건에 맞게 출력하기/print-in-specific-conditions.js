const fs = require('fs')
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number)


let r = ''
for(let i = 0; arr.length-1>i;i++){
    if(!arr[i]) break;

    if(arr[i]%2===0){ // 짝수
        r += (arr[i]/2) + (' ')

    }else{ // 홀수
        r += (arr[i] + 3 ) + (' ')
    }
}
console.log(r)