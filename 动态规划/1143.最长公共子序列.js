/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length,
    n = text2.length
  // 注意点：dp[i][j] 表示 text1[0...i - 1] 和 text2[0...j - 1] 的 lcs
  const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 注意点：text1[i - 1] 取前一个索引值比较
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(
          dp[i][j - 1], // text1[i - 1] 和 text2[j - 1] 至少有一个不在 lcs 中
          dp[i - 1][j],
          dp[i - 1][j - 1] // text1[i - 1] 和 text2[j - 1] 都不在 lcs 中，已经包含在前两个情况中，可以不参与比较
        )
      }
    }
  }
  return dp[m][n]
};
// @lc code=end