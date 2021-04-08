/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // 以 [i,j] 坐标为入口的岛屿面积
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == 0) {
      return 0
    }
    // 每次经过一块土地时，将这块土地的值置为 0，确保不会多次访问同一块土地
    grid[i][j] = 0
    let count = 1
    count += dfs(i + 1, j)
    count += dfs(i - 1, j)
    count += dfs(i, j + 1)
    count += dfs(i, j - 1)
    return count
  }

  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        ans = Math.max(ans, dfs(i, j))
      }
    }
  }
  return ans
};
// @lc code=end