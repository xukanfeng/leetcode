/*
 * @lc app=leetcode.cn id=1401 lang=javascript
 *
 * [1401] 圆和矩形是否有重叠
 */

// @lc code=start
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
/*
     |    |
 ____|____|____
     |    |
 ____|____|____
     |    |
     |    |
 */
var checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {
  // 圆心是否在矩形内
  if (x_center >= x1 && x_center <= x2 && y_center >= y1 && y_center <= y2) 
    return true
  // 圆心在矩形上下左右四个区域
  else if (x_center < x1 && y_center >= y1 && y_center <= y2) // 左
    return x_center >= x1 - radius
  else if (x_center > x2 && y_center >= y1 && y_center <= y2) // 右
    return x_center <= x2 + radius
  else if (y_center > y2 && x_center >= x1 && x_center <= x2) // 上
    return y_center <= y2 + radius
  else if (y_center < y1 && x_center >= x1 && x_center <= x2) // 下
    return y_center >= y1 - radius
  // 矩形的四个顶点是否在圆的内部
  else {
    return Math.min(
      (x1 - x_center) ** 2 + (y2 - y_center) ** 2, // 左上
      (x2 - x_center) ** 2 + (y2 - y_center) ** 2, // 右上
      (x1 - x_center) ** 2 + (y1 - y_center) ** 2, // 左下
      (x2 - x_center) ** 2 + (y2 - y_center) ** 2  // 右下
    ) < radius ** 2
  }
};
// @lc code=end

