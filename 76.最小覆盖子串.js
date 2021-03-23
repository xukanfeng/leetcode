/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let start = 0
  let length = Infinity
  let left = 0
  let right = 0
  let valid = 0
  const window = new Map()
  const need = new Map()
  for (let c of t) need.set(c, (need.get(c) || 1) + 1)

  while (right < s.length) {
    const c = s[right]
    right++
    if (need.has(c)) {
      window.set(c, (window.get(c) || 1) + 1)
      if (window.get(c) === need.get(c))
        valid++
    }

    // 注意点：使用 valid 值作为窗口收缩标志
    while (valid === need.size) {
      if (right - left < length) {
        start = left
        length = right - left
      }
      const c = s[left]
      left++
      if (need.has(c)) {
        if (window.get(c) === need.get(c))
          valid--
        window.set(c, window.get(c) - 1)
      }
    }
  }
  // 注意点：length === Infinity 表示没有匹配到过子串
  return length === Infinity ? '' : s.slice(start, start + length)
};
// @lc code=end