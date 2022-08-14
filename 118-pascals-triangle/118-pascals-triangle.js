/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var answer=[]
    for(let i = 0; numRows>i; i++){  
        let arr =[];
        for(let j = 0; i>=j; j++){
            //i=1 j=0
            if(i === j || j === 0 ){
                arr.push(1)
            }else{
                console.log(answer[i-1][j-1],answer[i-1][j])
                arr.push(answer[i-1][j-1]+answer[i-1][j])
            }
        }
        answer.push(arr)
    }
    
        // for(let i = 0;numRows>i;i++){
        //     if(i === 0 || i === 1) {
        //         i ? answer.push([1,1]) : answer.push([1]);
        //     }else{   
        //         const result =answer[i-1].reduce((acc,curr,idx)=>{                 
        //             if(i-1===idx){
        //                 acc.push(curr);
        //             }else{
        //                 let plusNum = answer[i-1][idx+1]+curr;
        //                 idx ? acc.push(plusNum):acc.push(curr,plusNum)
        //             }
        //            return acc
        //        },[]);
        //        answer.push(result)
        //     }
        // }
    return answer
};