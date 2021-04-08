/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) return 0
  let ans = 1
  let len = 1
  let i = 0,
    j = 1
  while (j < nums.length) {
    if (nums[j] > nums[i]) {
      len++
    } else {
      len = 1
    }
    i++
    j++
    ans = Math.max(ans, len)
  }
  return ans
};
// @lc code=end