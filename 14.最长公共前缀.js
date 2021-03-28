/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0 || strs[0] === '') return ''
  if (strs.length === 1) return strs[0]

  let ans = ''
  let index = 0
  while(index < strs[0].length) {
      let flag = strs.every(str => {
          return str[index] === strs[0][index]
      })
      if (flag) {
          ans += strs[0][index]
          index++
      } else break
  }
  return ans
};
// @lc code=end

