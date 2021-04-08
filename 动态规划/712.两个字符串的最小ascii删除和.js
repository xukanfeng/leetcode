/*
 * @lc app=leetcode.cn id=712 lang=javascript
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// 参考 1143 和 583
var minimumDeleteSum = function (s1, s2) {
  const m = s1.length,
    n = s2.length
  const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    // 注意点：s1.charCodeAt(i - 1)
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1)
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1)
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 注意点：取前一个索引比较
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          // 注意点：取前一个索引的值
          dp[i][j - 1] + s2.charCodeAt(j - 1),
          dp[i - 1][j] + s1.charCodeAt(i - 1)
        )
      }
    }
  }
  return dp[m][n]
};
// @lc code=end