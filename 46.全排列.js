/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = []

  function backtrack(nums, track) {
    if (track.length === nums.length) {
      ans.push([...track])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 注意点：过滤已经在 track 中的数字
      if (track.indexOf(nums[i]) !== -1) continue
      track.push(nums[i])
      backtrack(nums, track)
      track.pop()
    }
  }
  backtrack(nums, [])
  return ans
};
// @lc code=end