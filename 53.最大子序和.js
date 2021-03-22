/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0
    }
    sum += nums[i]
    max = Math.max(max, sum)
  }
  return max
};
// @lc code=end