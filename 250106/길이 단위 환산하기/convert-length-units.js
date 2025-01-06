const fs = require('fs');

let input = Number(fs.readFileSync(0));



console.log((30.48 * input).toFixed(1))