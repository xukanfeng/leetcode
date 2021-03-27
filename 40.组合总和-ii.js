/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const ans = []
  // 注意点：排序
  candidates.sort((a, b) => a > b ? 1 : -1)
  const set = new Set()

  function backtrack(target, track, start) {
    if (target < 0) return
    if (target === 0) {
      const tmp = track.join('-')
      if (!set.has(tmp)) {
        set.add(tmp)
        ans.push([...track])
      }
      return
    }

    for (let i = start; i < candidates.length; i++) {
      track.push(candidates[i])
      // 注意点：i + 1，确保元素不重复使用
      backtrack(target - candidates[i], track, i + 1)
      track.pop()
    }
  }
  backtrack(target, [], 0)
  return ans
};
// @lc code=end

