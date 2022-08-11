/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const code ={
        'I':1,
        'V':5,
        'X':10,
        "L":50,
        'C':100,
        'D':500,
        'M':1000}
    let answer = 0;
    for(let i =0;s.length>i;i++){
        if(code[s[i]]<code[s[i+1]]){
            answer = answer + code[s[i+1]]-code[s[i]]
            i++
           }else{
            answer = answer+ code[s[i]]
        }
    }
    return answer
};