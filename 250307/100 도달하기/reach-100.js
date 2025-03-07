const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim());


const arr = [1,n];

while(arr[arr.length-1] <= 100){

    arr.push(arr[arr.length-2] + arr[arr.length-1]);

}

console.log(arr.join(' '))
