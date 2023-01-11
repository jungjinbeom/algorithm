function solution(arr) {
    var answer = 0;    
    for(let i =0;arr.length>i;i++){
        answer +=arr[i]
    }
   
    return answer/arr.length;
}