/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 以 / 做分割，处理掉 / 和 // 的情况
  const dir = path.split('/'),
    stack = []
  for (const str of dir) {
    if (str === '.' || str === '') continue
    if (str === '..') {
      if (stack.length > 0) {
        stack.pop()
      }
      continue
    }
    stack.push(str)
  }
  return '/' + stack.join('/')
};
// @lc code=end