function solution(a, b) {
    var answer = 0;
    const min = a < b ? a : b
    const max =  b > a ? b : a
    for(let i = min; max>=i; i++){
        answer += i
    }
    return answer;
}