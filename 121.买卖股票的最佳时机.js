/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let currMin = prices[0]
  let ans = 0
  for (let sell = 1; sell < prices.length; sell++) {
    // 和新的数比较，更新最小值
    currMin = Math.min(currMin, prices[sell])
    ans = Math.max(ans, prices[sell] - currMin)
  }
  return ans
};
// @lc code=end