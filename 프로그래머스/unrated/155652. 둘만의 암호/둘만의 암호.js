function solution(s, skip, index) {
    
    const ALPAHBET = 'abcdefghijklmnopqrstuvwxyz'
    
    const num = index;
    const result = []
    for(let i = 0; s.length-1 >= i; i++){
        const answer = [];
        const findIndex = ALPAHBET.indexOf(s[i]);     
        
        for(let j = findIndex+1; ALPAHBET.length>=j; j++){
            if(j === 26) j = 0
            if(num === answer.length) break;
            if(skip.includes(ALPAHBET[j])) continue;
            
            
                answer.push(ALPAHBET[j])                      
            
        }
        console.log(answer)
        result.push(answer.pop())
    } 
    return result.join("");
}