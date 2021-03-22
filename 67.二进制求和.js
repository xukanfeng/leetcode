/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const length = Math.max(a.length, b.length)
  a = a.padStart(length, '0')
  b = b.padStart(length, '0')

  let ans = ''
  let carry = 0
  let i = length - 1
  while (i >= 0) {
    let sum = Number(a[i]) + Number(b[i]) + carry
    ans = sum % 2 + ans
    carry = Math.floor(sum / 2)
    i--
  }
  ans = carry ? carry + ans : ans
  return ans
};
// @lc code=end