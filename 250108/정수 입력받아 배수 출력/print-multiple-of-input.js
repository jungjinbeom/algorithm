const fs = require('fs');

let input = Number(fs.readFileSync(0).toString());

let result = ''
for(let i = 1; input * 5>=i; i++){
    if(i%input===0){
        result += (i+(" "));
    }
}
console.log(result)

