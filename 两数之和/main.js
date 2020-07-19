/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    let arrSet = new Set()
    for (let i=0;i<len;i++) {
        if (arrSet.has(target - nums[i])) {
            return [i, nums.indexOf(target - nums[i])]
        } else {
            arrSet.add(nums[i])
        }    
    }

    return false
};