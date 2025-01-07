const fs = require('fs')

const a = Number(fs.readFileSync(0).toString());
const result = a === 1 ? 't' : "f"
console.log(result)