/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var answer = nums.reduce((acc,curr,idx)=>{
        for(let i = idx+1 ;nums.length>i; i++){
            let j = nums[i];
            if(curr+j === target){
                acc.push(idx,i) 
            }
        }
        return acc
    },[])
  
    return answer;
};