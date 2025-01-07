const fs =require('fs');

let input = Number(fs.readFileSync(0).toString().trim());

let res = ''
if(input % 4 === 0){ 
    res ='true'

    if(input % 100 === 0 && input % 400 !== 0){
        res ='false'
    }

}else{
    res ='false'
}

console.log(res)