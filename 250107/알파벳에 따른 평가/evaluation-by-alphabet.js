const fs = require('fs');

let input = fs.readFileSync(0).toString();

if('S'===input){
    console.log('Superior')
}else if('A'===input){
    console.log('Excellent')
}else if('B'===input){
    console.log('Good')
}else if('C'===input){
    console.log('Usually')
}else if('D'===input){
    console.log('Effort')
}else{
    console.log('Failure')
}
