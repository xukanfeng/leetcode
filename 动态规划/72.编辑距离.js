/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length
  // 注意点：dp[i][j] 表示 word1[0...i] 和 word2[0...j] 的最小编辑距离，注意初始化为 0
  const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
  // dp[i][0] 表示 word1[0...i] 和空字符串比，最少需要编辑 i 次
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 如果 word1[0] === word2[0]，说明不需要编辑，此时 dp[1][1] === dp[0][0] === 0
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1] + 1 // 替换
        )
      }
    }
  }
  return dp[m][n]
};
// @lc code=end