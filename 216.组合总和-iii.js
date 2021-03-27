/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// 参考 39、40 思路
var combinationSum3 = function(k, n) {
  const ans = []

  function backtrack(k, n, track, start) {
    if (k < 0 || n < 0) return
    if (k === 0 && n === 0) {
      ans.push([...track])
      return
    }

    for (let i = start; i <= 9; i++) {
      track.push(i)
      backtrack(k - 1, n - i, track, i + 1)
      track.pop()
    }
  }
  backtrack(k, n, [], 1)
  return ans
};
// @lc code=end

