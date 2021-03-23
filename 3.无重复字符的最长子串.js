/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0
  let left = 0
  let right = 0
  const window = new Map()

  while (right < s.length) {
    const c = s[right]
    right++
    window.set(c, (window.get(c) || 0) + 1)

    while (window.get(c) > 1) {
      const d = s[left]
      left++
      window.set(d, window.get(d) - 1)
    }
    // 注意点：更新 ans
    ans = Math.max(ans, right - left)
  }
  return ans
};
// @lc code=end