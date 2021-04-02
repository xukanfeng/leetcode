/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// candidates 中的数字可以无限制重复被选取
var combinationSum = function(candidates, target) {
  const ans = []

  function backtrack(target, track, start) {
    if (target < 0) return
    if (target === 0) {
      ans.push([...track])
      return
    }
    // 注意点：start
    for (let i = start; i < candidates.length; i++) {
      track.push(candidates[i])
      // 注意点：i，确保不会去倒退搜索下标更小的元素
      backtrack(target - candidates[i], track, i)
      track.pop()
    }
  }
  backtrack(target, [], 0)
  return ans
};
// @lc code=end

