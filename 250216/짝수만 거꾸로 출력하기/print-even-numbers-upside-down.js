const fs = require('fs')

let [n,s] = fs.readFileSync(0).toString().trim().split('\n')
const arr = s.split(' ').map(Number);

let r = []

for(let i =0; arr.length-1>=i;i++){
    const num = Number(arr[i]);
    if(num%2===0){
        r = [Number(arr[i]),...r]
    }
}
console.log(r.join(' '))