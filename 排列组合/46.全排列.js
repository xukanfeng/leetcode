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
  const used = new Set()

  function backtrack(nums, track) {
    if (track.length === nums.length) {
      ans.push([...track])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used.has(i)) continue

      track.push(nums[i])
      used.add(i)
      backtrack(nums, track)
      used.delete(i)
      track.pop()
    }
  }
  backtrack(nums, [])
  return ans
};
// @lc code=end