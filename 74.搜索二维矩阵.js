/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length
  let n = matrix[0].length
  if (m === 0) return false

  let left = 0,
    right = m * n - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    // 注意点：通过行号和列号取 mid 对应值
    let value = matrix[Math.floor(mid / n)][mid % n]
    if (value < target) {
      left = mid + 1
    } else if (value > target) {
      right = mid - 1
    } else {
      return true
    }
  }
  return false
};
// @lc code=end