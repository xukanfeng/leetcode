/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1
  let maxOpacity = 0
  while (left < right) {
    let res = Math.min(height[left], height[right]) * (right - left)
    maxOpacity = Math.max(maxOpacity, res)
    // 如果左边高度小，说明瓶颈在左边，增加 left 索引
    if (height[left] < height[right]) left++
    else right--
  }
  return maxOpacity
};
// @lc code=end