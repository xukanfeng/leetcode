/*
 * @lc app=leetcode.cn id=1209 lang=javascript
 *
 * [1209] 删除字符串中的所有相邻重复项 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  // 注意点：使用一个计数栈
  let counts = []
  for (let i = 0; i < s.length; i++) {
      if (i === 0 || s[i] !== s[i - 1]) {
          counts.push(1)
      } else {
        // 如果字符相同，计数加 1
        counts[counts.length - 1]++
        // 计数到 k 时
        if (counts[counts.length - 1] === k) {
          counts.pop()
          // 删除元素
          s = s.slice(0, i - k + 1) + s.slice(i + 1)
          // 更新索引
          i = i - k
        }
      }
  }
  return s
};
// @lc code=end

