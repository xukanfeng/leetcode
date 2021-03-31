/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let ans = -Infinity
  const m = A.length
  const n = B.length
  const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <=n; j++) {
      // 子数组末尾项相同
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = 0 // 已初始化
      }
      // 注意点
      ans = Math.max(dp[i][j], ans)
    }
  }
  return ans
};
// @lc code=end

