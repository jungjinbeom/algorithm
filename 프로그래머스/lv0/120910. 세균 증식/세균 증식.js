function solution(n, t) {
    var answer = n;
    for(let i = 1; t>=i; i++){
       answer = answer * 2 
    }
    return answer;
}