/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let ans = 0
  const preSumMap = new Map()
  // 注意点：初始为 0 => 1
  preSumMap.set(0, 1)
  // 注意点：前缀和
  let preSum = 0

  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i]
    if (preSumMap.has(preSum - k)) {
      ans += preSumMap.get(preSum - k)
    }
    // 注意点：最后更新 preSumMap，否则如果 preSum - k === preSum，会出错
    preSumMap.set(preSum, (preSumMap.get(preSum) || 0) + 1)
  };
  return ans
}
// @lc code=end

/*
给定一个整数数组和一个整数 k， 你需要找到该数组中和为 k 的连续的子数组的个数。
*/