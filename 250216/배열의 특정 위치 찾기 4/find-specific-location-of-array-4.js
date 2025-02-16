const fs =require('fs')

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let r = 0
let cnt = 0 

for(let i = 0; input.length-1>=i;i++){
    if(!Number(input[i])){
        break;
    }else{
        if(Number(input[i])%2===0){
            r+=Number(input[i])
            cnt++ 
        }
    }
}
console.log(cnt, r)

