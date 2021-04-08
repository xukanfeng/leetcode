/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = []

  function backtrack(track, start, count) {
    if (count === k) {
      ans.push([...track])
      return
    }

    for (let i = start; i <= n; i++) {
      track.push(i)
      backtrack(track, i + 1, count + 1)
      track.pop()
    }
  }
  backtrack([], 1, 0)
  return ans
};
// @lc code=end