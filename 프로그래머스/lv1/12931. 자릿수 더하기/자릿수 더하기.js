function solution(n)
{
    var answer = 0;
    const arr =[...String(n)]
    for(let i = 0; arr.length>i; i++){
        answer += Number(arr[i])
    }
    
    return answer;
}