const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function modify(a,b){
    const _a = a > b ? a + 25 : a * 2
    const _b = b > a ? b + 25 : b * 2
    console.log(_a, _b)
}

modify(a,b)
