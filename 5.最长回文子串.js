/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 注意点：入参为 l 和 r，可以同时处理回文串长度为奇数和偶数的情况
  function palindrome(l, r) {
    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        l--
        r++
      } else {
        // 注意点
        break
      }
    }
    return s.slice(l + 1, r)
  }
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(i, i)
    const s2 = palindrome(i, i + 1)
    if (ans.length < s1.length) ans = s1
    if (ans.length < s2.length) ans = s2
  }
  return ans
};
// @lc code=end