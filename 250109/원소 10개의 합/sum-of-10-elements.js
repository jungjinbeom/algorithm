const fs = require('fs')
let n = fs.readFileSync(0).toString().trim().split(' ');


let result = 0;

 n.forEach(v=>result += +v)

 console.log(result)