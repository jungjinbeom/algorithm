function solution(arr) {
    var answer = [];
    const min = Math.min(...arr);
    for(let i =0; arr.length>i; i++){
        if(min!==arr[i]){
            answer.push(arr[i])
        }
    }    
    return answer.length ? answer : [-1]
}