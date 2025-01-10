const fs = require('fs');

let n = Number(fs.readFileSync(0).toString().trim())

let result = ''
for(let i = n; 100>=i; i++){
    if(i>=90){
        result += "A" + (' ')
        continue;
    }
    if(i>=80){
        result += "B" + (' ')
        continue;
    }
    if(i>=70){
        result += "C" + (' ')
        continue;
    }
    if(i>=60){
        result += "D" + (' ')
        continue;
    }
    if(i<60){
        result += "F" + (' ')
        continue;
    }    
}

   console.log(result)