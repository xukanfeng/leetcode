/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0,
    j = 0
  while (j < nums.length) {
    if (nums[j] !== val) {
      // 注意点：和 26 比较
      nums[i] = nums[j]
      i++
    }
    j++
  }
  // 注意点
  return i
};
// @lc code=end