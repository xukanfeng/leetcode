/*
 * @lc app=leetcode.cn id=1663 lang=javascript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let ans = ''
  for (let i = 1; i <= n; i++) {
    for (let charPos = 1; charPos <= 26; charPos++) {
      // 注意点：如果后面的所有字母都是 z，再加上当前字母都不够总和 k，说明当前字母太小了，要加大一点
      if ((n - i) * 26 + charPos < k) continue
      ans += String.fromCharCode(96 + charPos)
      k = k - charPos
      break
    }
  }
  return ans
};
// @lc code=end

/*
小写字符 的 数值 是它在字母表中的位置（ 从 1 开始）， 因此 a 的数值为 1， b 的数值为 2， c 的数值为 3， 以此类推。

字符串由若干小写字符组成， 字符串的数值 为各字符的数值之和。 例如， 字符串 "abe"
的数值等于 1 + 2 + 5 = 8。

给你两个整数 n 和 k。 返回 长度 等于 n 且 数值 等于 k 的 字典序最小 的字符串。

注意， 如果字符串 x 在字典排序中位于 y 之前， 就认为 x 字典序比 y 小， 有以下两种情况：

x 是 y 的一个前缀；
如果 i 是 x[i] != y[i] 的第一个位置， 且 x[i] 在字母表中的位置比 y[i] 靠前。
*/