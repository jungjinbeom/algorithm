function solution(n) {
    var answer = [];
    const arr = String(n).split('').map((num)=>Number(num));
    
    arr.reverse();
    return arr;
}