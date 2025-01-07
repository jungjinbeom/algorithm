const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

if(a%2===0) console.log('even')
if(a%2!==0) console.log('odd')

if(b%2===0) console.log('even')
if(b%2!==0) console.log('odd')