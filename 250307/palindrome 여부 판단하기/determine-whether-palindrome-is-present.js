const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.



function modify(str){
    return str.split('').reverse().join('');
}

const _str = modify(str)
console.log(str === _str ? "Yes":"No")