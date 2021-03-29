/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const ans = []
  let prev
  prev = -Infinity
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) prev = i
    ans.push(i - prev)
  }
  prev = Infinity
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) prev = i
    ans[i] = Math.min(ans[i], prev - i)
  }
  return ans
};
// @lc code=end

