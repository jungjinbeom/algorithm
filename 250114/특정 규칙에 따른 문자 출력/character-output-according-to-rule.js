const fs = require('fs')

let n = Number(fs.readFileSync(0).toString().trim())

let str = '';

for(let i = 0;n>i;i++){
    str = ''
    for(let j = 0; n - 1 - i >j; j++){
        str += '  '
    }

    for(let k = 0; i + 1 > k; k++){
        str += '@ '
    }
    console.log(str)
}

for(let i = 0;n-1>i;i++){
    str = ''
    for(let j = 0; n - 1 - i >j; j++){
        str += '@ '
    }
    
    console.log(str)
}