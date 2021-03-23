/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 注意点：dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
  const dp = new Array(nums.length + 1).fill(1)

  for (let i = 0; i < nums.length; i++) {
    // 从 i 前面的数字开始找
    for (let j = 0; j < i; j++) {
      // 如果位置 j 的数字小于当前数字，就有可能产生新的最大长度。位置 j 的最大长度加 1，就是新的最大长度
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return dp.reduce((a, b) => Math.max(a, b))
};
// @lc code=end