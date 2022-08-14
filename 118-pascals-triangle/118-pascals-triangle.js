/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var answer=[]
    const handlePascal=(num)=>{
        for(let i =0;num>i;i++){
            if(!i || i===1) {
                !i ? answer.push([1]) : answer.push([1,1])
            }else{   
                let prevArr = answer[i-1]
                let len = prevArr.length;
                const result =prevArr.reduce((acc,curr,idx)=>{
                    let nextNum = prevArr[idx+1];
                    if(!idx){
                        acc.push(curr,nextNum+curr);
                    }else if(len-1 === idx){
                         acc.push(curr);
                    }else{
                         acc.push(nextNum+curr);
                    }
                   return acc
               },[])
                answer.push(result)
            }
        }
        console.log(answer)
        return answer
    }
    return handlePascal(numRows)
};