function solution(arr, divisor) {
    
    var answer = [];
    
    for(let i = 0; arr.length>i; i++){
        if(arr[i] % divisor===0){
            answer.push(arr[i])
        }
    }
    
    return answer.length ? answer.sort((a,b) => a-b) :[-1];
}