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

/*
给定一个未经排序的整数数组， 找到最长且 连续递增的子序列， 并返回该序列的长度。

连续递增的子序列 可以由两个下标 l 和 r（ l < r） 确定， 如果对于每个 l <= i < r， 都有 nums[i] < nums[i + 1]， 那么子序列[nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
*/