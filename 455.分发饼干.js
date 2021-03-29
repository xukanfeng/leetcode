/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a > b ? 1 : -1)
  s.sort((a, b) => a > b ? 1 : -1)
  
  let ans = 0
  let i = 0
  let j = 0
  while(i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      ans++
      i++
      j++
    } else {
      j++
    }
  }
  return ans
};
// @lc code=end

