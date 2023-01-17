function solution(arr){
    var answer = [];
    console.log(arr)
    answer = arr.reduce((acc,curr,idx)=>{
        if(idx){
            const lastNum = acc[acc.length-1]
            if(curr !== lastNum){ 
                acc.push(curr)
            }
        }else{
           
            acc.push(curr)
        }
        return acc 
    },[]);
    console.log(answer)
    return answer;
}