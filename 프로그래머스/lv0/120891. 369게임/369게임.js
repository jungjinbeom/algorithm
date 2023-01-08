function solution(order) {
    var answer = 0;
    const string = String(order)
    const numbers = [...string]
    console.log(numbers.length)
    for(let i=0 ;numbers.length>i;i++){
      answer += [3,6,9].includes(Number(numbers[i])) ? 1 : 0
    }
    
    
    return answer;
}