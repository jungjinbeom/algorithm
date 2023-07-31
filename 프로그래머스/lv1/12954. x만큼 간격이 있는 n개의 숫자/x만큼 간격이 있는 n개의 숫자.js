function solution(x, n) {
    var answer = [];
    for(let i = 1; n>=i;i++){
        answer.push(x*i)
    }
    return answer;
}