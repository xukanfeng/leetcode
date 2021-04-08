/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length
  // 注意点：dp[i][j] 表示在 s[i...j] 中的 lps
  const dp = new Array(n).fill(0).map(_ => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    // 注意点：dp[i][i] 表示只有一个字符，lps = 1
    dp[i][i] = 1
  }
  // 注意点：需要知道 dp[i + 1][j - 1] 的状态，因此反向遍历
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        // 注意点：+ 2
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        // 注意点：取 s[i...j - 1] 和 s[i + 1...j] 中较长的 lps
        dp[i][j] = Math.max(
          dp[i][j - 1],
          dp[i + 1][j]
        )
      }
    }
  }
  // 注意点：返回 s[0...n - 1] 的 lps
  return dp[0][n - 1]
};
// @lc code=end