const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let str = ''
for(let i = 1; 4>=i; i++){
    str = ''
    for(let j = b; j>=a; j--){
        if(j === a){
            str += `${j} * ${2 * i} = ${j*(2*i)}`
        }else{
            str += `${j} * ${2 * i} = ${j*(2*i)} / `
        }
       
    }
    console.log(str)
}