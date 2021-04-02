/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let res = 0
  // 注意点：位置 i 左边最高的柱子高度
  const lmax = []
  lmax[0] = height[0]
  // 注意点：位置 i 右边最高的柱子高度
  const rmax = []
  rmax[height.length - 1] = height[height.length - 1]

  for (let i = 1; i < height.length; i++) {
    lmax[i] = Math.max(height[i], lmax[i - 1])
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rmax[i] = Math.max(height[i], rmax[i + 1])
  }
  // height 数组至少有 3 个元素才可能接到雨水，i === 0 和 i === height.length - 1 其实是无效的
  for (let i = 0; i < height.length; i++) {
    // 注意点：位置 i 能接到的雨水等于 Math.min(lmax[i], rmax[i]) - height[i]
    res += Math.min(lmax[i], rmax[i]) - height[i]
  }
  return res
};
// @lc code=end