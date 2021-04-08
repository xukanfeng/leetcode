/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = []

  function backtrack(track, start) {
    ans.push([...track])

    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      backtrack(track, i + 1)
      track.pop()
    }
  }
  backtrack([], 0)

  return ans
};
// @lc code=end