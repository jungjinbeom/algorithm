const fs =require('fs')

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)


const arr = [a,b]
for(let i = 2; 9>=i;i++){
    arr[i] = (arr[i-1] + arr[i-2]) % 10
    
}
console.log(arr.join(' '))