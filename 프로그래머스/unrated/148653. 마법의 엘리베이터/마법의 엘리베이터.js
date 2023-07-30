function solution(storey) {
    let result =0;
    const arr = String(storey).split('').map((num)=>Number(num))
    
    for(let i =arr.length-1; i>=0;i--){
        if(arr[i]>5){
            result += 10 - arr[i];
             if(i === 0) {
                result++
            }
            arr[i-1]++
        }else if(arr[i] === 5 && i > 0 && arr[i-1] >= 5) {
            result+= 5
            arr[i-1]++     
        }else {
            result+= arr[i]
        } 
        
    }
    
    return result;
}