function solution(n) {
    var answer = 0;
    for(let i =1; n>=i; i++){
        if(n%i === 0){
            answer+=i
        }
    }
    
    return answer;
}