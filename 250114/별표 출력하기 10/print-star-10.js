const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

let str = ''

for(let i = 0; n>i;i++){
    str = "";
    if(i%2!==0){ 
        for(let j = 0; n-(i-1)/2>j; j++){
            str += "* "
        }
    }
    if(i%2===0){
        for(let k = 0; 1 + (i/2)>k; k++){
            str += "* "
        }  
    }
    console.log(str)
    
}



for(let i = n-1; i>=0;i--){
    str = "";
    if(i%2!==0){ 
        for(let j = 0; n-(i-1)/2>j; j++){
            str += "* "
        }
    }
    if(i%2===0){
        for(let k = 0; 1 + (i/2)>k; k++){
            str += "* "
        }  
    }
    console.log(str)
    
}