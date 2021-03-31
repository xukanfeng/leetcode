/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let ans = Infinity
  nums.sort((a, b) => a > b ? 1 : -1)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === target) return target
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum
      }
      if (sum > target) {
        r--
      } else {
        l++
      }
    }
  }

  return ans
};
// @lc code=end