/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ans = []
  // 注意点：board 需要初始化为二维数组
  const board = new Array(n).fill(0).map(_ => new Array(n).fill('.'))

  function isValid(board, row, col) {
    // 注意点：遍历之前所有的行和列，搜索 Q
    for (let i = 0; i < row; i++) {
      // 注意点：j < n
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 'Q' &&
          // 注意点：检查之前的 Q 和当前位置是否在同一列或者对角线上
          (j === col || i + j === row + col || i - j === row - col)) {
          return false
        }
      }
    }
    return true
  }

  function backtrack(board, row) {
    if (row === board.length) {
      const tmp = []
      for (let i = 0; i < board.length; i++) {
        tmp.push(board[i].join(''))
      }
      ans.push(tmp)
      return
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) continue
      board[row][col] = 'Q'
      backtrack(board, row + 1)
      board[row][col] = '.'
    }
  }

  backtrack(board, 0)
  return ans
};
// @lc code=end