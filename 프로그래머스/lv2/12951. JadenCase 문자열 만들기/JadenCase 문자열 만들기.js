function solution(s) {
    const strArr = s.split(" ")
    var answer = [];
    let letter ="";
    
    
    answer = strArr.reduce((acc,curr,idx)=>{
        const firstStr = [...curr][0]
        let str= ""
        console.log(firstStr)
        if(firstStr){
            str = isNaN(firstStr) ? firstStr.toUpperCase() : firstStr 
            const restStr = curr.slice(1,curr.length).toLowerCase();
            str += restStr
            acc.push(str)
        }else{
            acc.push(firstStr)   
        }
        return acc 
    },[])
  
    return answer.join(" ");
}