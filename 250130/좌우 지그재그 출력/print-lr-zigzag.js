const fs =require('fs')

let input = Number(fs.readFileSync(0).toString().trim())

let str = '';

for(let i = 1; input>=i; i++){
    str = ''
    for(let j = 0; input>j; j++){
        if(i % 2 !== 0){
            str += (input * i) - (input - ( j+1 ))  + (' ')
        }else{
            str += ((input * i ) - j) + (' ')
        }
    }
    console.log(str)
}