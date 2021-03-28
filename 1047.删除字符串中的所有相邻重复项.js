/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  const stack = []
  for (let c of S) {
    if (stack.length === 0 || c !== stack[stack.length - 1]) {
      stack.push(c)
    } else if (c === stack[stack.length - 1]) {
      stack.pop()
    }
  }
  return stack.join('')
};
// @lc code=end

