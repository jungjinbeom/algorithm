const fs = require('fs')

let n = fs.readFileSync(0).toString().trim();


let str = ''
for(let i = 1; (n * 2)+1>=i;i++){
    str = ''
    for(let j = 1; (n * 2)+1>=j;j++){
        if(i%2 === 0){
            if(j%2 === 0){
                str +=' '    
            }else{
                str +='*  '
            }
        }else{
            str +='* '
        }
    }
    console.log(str)

}