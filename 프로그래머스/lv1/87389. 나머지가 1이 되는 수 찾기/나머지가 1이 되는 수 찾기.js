function solution(n) {
    let answer = 0;
    for(let i = 0; n>=i; i++){
        if(n % i === 1){
            answer = i
            break;
        }
    }
    return answer 
}