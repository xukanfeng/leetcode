/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const ans = []
  intervals.sort((a, b) => a[0] > b[0] ? 1 : -1)
  // 注意点：把最后的结果保存到 ans
  ans.push(intervals.reduce((prev, curr) => {
    if (prev[1] < curr[0]) {
      ans.push(prev)
      return curr
    } else if (prev[1] >= curr[0] && prev[1] < curr[1]) return [prev[0], curr[1]]
    else if (prev[1] >= curr[1]) return prev
  }))
  return ans
};
// @lc code=end