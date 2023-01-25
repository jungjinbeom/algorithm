function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i=0; participant.length>i; i++){
        if(participant[i] !== completion[i]){
            return participant[i] 
        }    
    }
}