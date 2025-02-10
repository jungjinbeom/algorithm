// 변수 선언
let str = "";

for (let first = 1; first <= 19; first++) {
    for (let second = 1; second <= 19; second++) {
        // Case 1:
        if (second % 2 === 1) {
            str += `${first} * ${second} = ${first * second}`;
        }
        // Case 2:
        else {
            str += ` / ${first} * ${second} = ${first * second}\n`;
        }
        
        // Case 3:
        if (second === 19) {
            str += "\n";
        }
    }
}

console.log(str)