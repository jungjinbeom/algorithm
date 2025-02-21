const fs =require('fs')

let input = fs.readFileSync(0).toString().trim().split('\n')

let n = input[0];
const arr = input[1].split(' ');


const r = [];
for(let i = 0; n>i;i++){
    if(arr[i]%2===0){
        r.push(arr[i])
    }
    
}
console.log(r.join(' '))