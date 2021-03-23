/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = []
  // 注意点：入参为当前括号数量
  function backtrack(left, right, track) {
    if (left === n && right === n) {
      ans.push(track.join(''))
      return
    }
    if (left > n || right > n || left < right) return

    track.push('(')
    backtrack(left + 1, right, track)
    track.pop()

    track.push(')')
    backtrack(left, right + 1, track)
    track.pop()
  }
  backtrack(0, 0, [])

  return ans
};
// @lc code=end