function solution(s) {
    const strArr = s.split(" ")
    var answer = [];
    answer = strArr.reduce((acc,curr)=>{
        let str= ""
        const firstStr = [...curr][0]
        if(firstStr){
            str = isNaN(firstStr) ? firstStr.toUpperCase() : firstStr 
            str += curr.slice(1,curr.length).toLowerCase();
            acc.push(str)
        }else{
            acc.push(firstStr)   
        }
        return acc 
    },[])
  
    return answer.join(" ");
}