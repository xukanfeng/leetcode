/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = []
  const used = new Set()
  nums.sort((a, b) => a - b > 0 ? 1 : -1)

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

      // 注意点：和 46 题的区别在于对 nums 排序，并跳过相同的数字
      const num = nums[i]
      while (i < nums.length && num === nums[i + 1]) i++
    }
  }
  backtrack(nums, [])
  return ans
};
// @lc code=end