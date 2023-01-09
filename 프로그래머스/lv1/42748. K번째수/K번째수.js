function solution(array, commands) {
    var answer = [];
    for(let idx = 0;commands.length>idx;idx++){
        const arr = [...array]
        const [i,j,k] =commands[idx];
        const result = arr.slice(i-1,j).sort((a,b)=>a-b)
        answer.push(result.length > 2 ? result[k-1] : result[commands.length%k])
        
        
    }
    
    
    
    return answer;
}