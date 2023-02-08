function solution(array) {
    var answer = 0;
    array.forEach(number=>(
       [...String(number)].forEach(secNumber=>{
            if(secNumber.includes("7")){
                answer+=1
            }
       })
    ));
    return answer;
}