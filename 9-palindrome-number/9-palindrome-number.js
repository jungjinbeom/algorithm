/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let answer = true
    let str = String(x);
    let arr = [...str];
    
    //첫번째 예시
    // for문을 사용한 풀이
    
    // let len = arr.length;
    // for(let i =0; Math.floor(len/2)>i; i++){
    //      if(arr[i]!==arr[len-1-i]){
    //      answer=false
    //  }
    // }
    
    // 두번째 예시 
    // 메소드를 사용한 풀이 
    
    let arrNum = arr.reverse('').join('');
    let num = Number(arrNum);
    if(num!==x){
        answer =false
    }
    return answer
};