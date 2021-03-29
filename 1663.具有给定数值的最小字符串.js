/*
 * @lc app=leetcode.cn id=1663 lang=javascript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let ans = ''
  for (let i = 1; i <= n; i++) {
    for (let charPos = 1; charPos <= 26; charPos++) {
      // 注意点：如果后面的所有字母都是 z，再加上当前字母都不够总和 k，说明当前字母太小了，要加大一点
      if ((n - i) * 26 + charPos < k) continue
      ans += String.fromCharCode(96 + charPos)
      k = k - charPos
      break
    }
  }
  return ans
};
// @lc code=end

