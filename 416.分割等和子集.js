/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 子集背包问题
var canPartition = function (nums) {
  const n = nums.length
  let sum = nums.reduce((a, b) => a + b)
  if (sum % 2) return false
  sum = sum / 2

  const dp = new Array(n + 1).fill(0).map(_ => new Array(sum + 1).fill(false))
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j - nums[i - 1] >= 0) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[n][sum]

  /*
  // 状态压缩
  const dp = new Array(sum + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < n; i++) {
    for (let j = sum; j >= 0; j--) {
      if (j - nums[i] >= 0) {
        dp[j] = dp[j] || dp[j - nums[i]]
      }
    }
  }
  return dp[sum]
  */
};
// @lc code=end