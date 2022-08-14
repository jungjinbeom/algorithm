/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var answer=[]
        for(let i = 0;numRows>i;i++){
            if(!i || i===1) {
                !i ? answer.push([1]) : answer.push([1,1])
            }else{   
                let prevArr = answer[i-1]
                const result =prevArr.reduce((acc,curr,idx)=>{
                    let nextNum = prevArr[idx+1];
                    if(i-1===idx){
                        acc.push(curr);
                    }else{
                        idx ? acc.push(nextNum+curr):acc.push(curr,nextNum+curr)
                    }
                   return acc
               },[]);
               answer.push(result)
            }
        }
    return answer
};