function solution(n) {
    var answer = 1;
    let count = 1;
    for(let i = 1; n>=i; i++){
        count *= i
        if(count === n) return i;
        if(count > n) return i-1;
    }
}