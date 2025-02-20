const fs =require('fs')

let input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number)


let r = ''
for(let i=0; n>i; i++){
    r += (arr[i] * arr[i]) + (' ')
}
console.log(r)

