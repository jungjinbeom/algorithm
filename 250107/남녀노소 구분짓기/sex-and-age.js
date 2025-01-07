const fs = require('fs');

let [gender,age] = fs.readFileSync(0).toString().split('\n').map(Number);



if(gender === 0){
    if(age>=19){
        console.log("MAN")
    }
    if(age<19){
        console.log("BOY")
    }
}

if(gender===1){
    if(age>=19){
        console.log("WOMAN")
    }
    if(age<19){
        console.log("GIRL")
    }
}