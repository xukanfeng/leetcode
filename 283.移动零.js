/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0
  while (j < nums.length) {
    if (nums[j] !== 0) {
      nums[i] = nums[j]
      i++
    }
    j++
  }
  // 以上同 27
  while (i < nums.length) {
    nums[i] = 0
    i++
  }
};
// @lc code=end