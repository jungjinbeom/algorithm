function solution(a, b) {
    var answer = 0
    a.map((num,i)=>answer +=num*(b[i]))
  
    return answer;
}