function solution(num) {
    let answer = num;
    let count = 0;
    while(num){  
        if(num === 1){
            break;
        }
        if(answer%2===0){
            answer = answer/2
            count+=1
        }else{
            answer = ((answer*3)+1)
            count+=1
        }
        
        if(answer === 1){
            break;
        }
        
        if(count === 500 && answer !==1){
            count = -1;
            break;
        }
        
    }
   
  
    return count;
}