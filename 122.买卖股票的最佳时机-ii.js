/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0
  for (let i = 1; i < prices.length; i++) {
    // 贪心算法，只要价格比前一天高，就交易一次，能赚多少是多少
    if (prices[i] > prices[i - 1]) {
      ans += prices[i] - prices[i - 1]
    }
  }
  return ans
};
// @lc code=end