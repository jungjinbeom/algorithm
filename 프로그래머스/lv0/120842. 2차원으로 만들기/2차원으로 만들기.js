function solution(num_list, n) {
    var answer = [];
    for(let i=0; num_list.length>i; i = i+n){
        answer.push(num_list.slice(i,i+n))
    }
    return answer;
}
