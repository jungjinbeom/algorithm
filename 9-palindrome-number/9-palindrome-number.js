/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let answer = true
    let str = String(x);
    let arr = [...str];
    let len = arr.length;
    for(let i =0; Math.floor(len/2)>i; i++){
       console.log(arr[len-1-i])
     if(arr[i]!==arr[len-1-i]){
         answer=false
     }
    }
 
    return answer
};