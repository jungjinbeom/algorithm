function solution(progresses, speeds) {
    var answer = [];
    const MAX_NUM = 100;
    const numCount = progresses.reduce((acc,progress,idx)=>{
    const date = Math.ceil((MAX_NUM-progress) / speeds[idx])
    const result = acc[acc.length-1];
    if(result && result[0] >= date){
        result.push(date)
    }else {
        acc.push([date])
    }
    return acc;
    },[]).map((count)=>count.length)

   
    return numCount;
}