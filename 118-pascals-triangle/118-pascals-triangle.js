/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var answer=[]
        for(let i = 0;numRows>i;i++){
            if(i === 0 || i === 1) {
                i ? answer.push([1,1]) : answer.push([1])
            }else{   
                
                const result =answer[i-1].reduce((acc,curr,idx)=>{                 
                    let nextNum = answer[i-1][idx+1];
                    if(i-1===idx){
                        acc.push(curr);
                    }else{
                        let plusNum = answer[i-1][idx+1]+curr
                        idx ? acc.push(plusNum):acc.push(curr,plusNum)
                    }
                   return acc
               },[]);
               answer.push(result)
            }
        }
    return answer
};