/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length
  // 注意点：dp[i] 表示从第 i 个房间开始，最多能抢到的钱
  const dp = new Array(n + 2).fill(0)
  // 反向遍历
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = Math.max(
      dp[i + 2] + nums[i],
      dp[i + 1]
    )
  }
  return dp[0]
};
// @lc code=end