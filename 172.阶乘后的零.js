/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let ans = 0
  let divisor = 5
  while (divisor <= n) {
    // 注意点：ans = n 中因子 5 的个数 + 因子 25 的个数 + 因子 125 的个数 ...
    ans += Math.floor(n / divisor)
    divisor *= 5
  }
  return ans
};
// @lc code=end

