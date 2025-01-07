const fs =require('fs');

let [a,b] = fs.readFileSync(0).toString().split('\n');

const [math,eng] = a.split(' ').map(Number);
const [math2,eng2] = b.split(' ').map(Number);

if(math > math2){
    console.log('A')
}

if(math2 > math){
    console.log('B')
}

if(math === math2){
    if(eng>eng2){
        console.log('A')
    }
    if(eng2>eng){
        console.log('B')
    }
}