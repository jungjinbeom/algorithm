const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let [a,b] = input

function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

[a, b] = swap(a,b)

console.log(a, b)