/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var win = []
    var result = []
    var len = nums.length
    for (var i=0; i<len; i++) {
        if (i>=k && win[0] <= i - k) {
            // 如果出界则删除。
            win.shift()
        }
        while (win && nums[win[win.length - 1]] <= nums[i]) {
            // 如果新元素最大，则清空队列
            win.pop()
        }
        win.push(i)
        if (i >= k - 1) {
            result.push(nums[win[0]])
        }
    }

    return result
};