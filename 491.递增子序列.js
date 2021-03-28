/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 参考 39、40
var findSubsequences = function (nums) {
  const ans = []

  function backtrack (track, start) {
    if (track.length >= 2) {
      ans.push([...track])
    }

    // 注意点：在 [start + 1, ...] 范围内遍历时，进行去重
    const set = new Set()
    for (let i = start + 1; i < nums.length; i++) {
      if (set.has(nums[i])) continue
      set.add(nums[i])

      // 注意点：对下标为 0 的元素特殊处理
      if (start === -1 || nums[i] >= nums[start]) {
        track.push(nums[i])
        backtrack(track, i)
        track.pop()
      }
    }
  }
  backtrack([], -1)
  return ans
};
// @lc code=end

