/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // dp[i] 表示组成金额 i 需要的最少硬币数量，初始化为极大值
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      // 注意点：最小的硬币面值都比当前金额大，直接跳过
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end