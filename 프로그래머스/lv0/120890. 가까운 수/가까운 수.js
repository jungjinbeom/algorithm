function solution(array, n) {
    var answer = 0;
    array.sort((a,b)=>a-b)
    array.map(num=>{
        const curr = Math.abs(num-n);
        const prev = Math.abs(answer-n);
        answer = curr >= prev ? answer : num
    })
    return answer;
}