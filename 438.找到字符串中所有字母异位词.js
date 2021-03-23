/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ans = []
  let left = 0
  let right = 0
  let valid = 0
  let window = new Map()
  let need = new Map()
  for (let c of p) need.set(c, (need.get(c) || 0) + 1)

  while (right < s.length) {
    const c = s[right]
    right++
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c))
        valid++
    }
    while (right - left >= p.length) {
      if (valid === need.size) ans.push(left)
      const c = s[left]
      left++
      if (need.has(c)) {
        if (window.get(c) === need.get(c))
          valid--
        window.set(c, window.get(c) - 1)
      }
    }
  }
  return ans
};
// @lc code=end