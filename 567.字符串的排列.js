/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0
  let right = 0
  let valid = 0
  let window = new Map()
  let need = new Map()
  for (let c of s1) need.set(c, (need.get(c) || 0) + 1)

  while (right < s2.length) {
    const c = s2[right]
    right++
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c))
        valid++
    }
    while (right - left >= s1.length) {
      if (valid === need.size) return true

      const c = s2[left]
      left++
      if (need.has(c)) {
        if (window.get(c) === need.get(c))
          valid--
        window.set(c, window.get(c) - 1)
      }
    }
  }
  return false
};
// @lc code=end

/*
给定两个字符串 s1 和 s2， 写一个函数来判断 s2 是否包含 s1 的排列。

换句话说， 第一个字符串的排列之一是第二个字符串的 子串。
*/