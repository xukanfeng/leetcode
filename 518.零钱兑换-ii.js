/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 完全背包问题
var change = function (amount, coins) {
  /*
  const n = coins.length
  // 注意点：dp[i][j] 表示只用前 i 种硬币，凑出值为 j 的面额的凑法数
  // 初始化为全 0，表示不取任何硬币，凑出任意面额的凑法都为 0
  const dp = new Array(n + 1).fill(0).map(_ => new Array(amount + 1).fill(0))

  for (let i = 0; i <= n; i++) {
    // 凑出的面额为 0 时，只有不取硬币这一种取法
    dp[i][0] = 1
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] >= 0) {
        // 取前一种硬币，那么凑出 j - coins[i - 1] 的面额，有 dp[i][j - coins[i - 1]] 种取法
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
      } else {
        // 不取前一种硬币，继承前一种结果
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[n][amount]
  */

  const n = coins.length
  // 注意点：dp[j] 表示凑出值为 j 的面额的凑法数
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= amount; j++) {
      // 如果还可以取第 i 个硬币（加上第 i 个硬币后，面额还没有超过总面额）
      if (j - coins[i] >= 0)
        // 取第 i 个硬币后的凑法数 dp[j]，等于取第 i 个硬币前的凑法数 dp[j]，加上凑出面额为 j - coin[i] 的凑法数
        dp[j] = dp[j] + dp[j - coins[i]]
    }
  }
  return dp[amount]
};
// @lc code=end