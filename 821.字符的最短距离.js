/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const ans = []
  let prev
  prev = -Infinity
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) prev = i
    ans.push(i - prev)
  }
  prev = Infinity
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) prev = i
    ans[i] = Math.min(ans[i], prev - i)
  }
  return ans
};
// @lc code=end

/*
给你一个字符串 s 和一个字符 c， 且 c 是 s 中出现过的字符。

返回一个整数数组 answer， 其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离。

两个下标 i 和 j 之间的 距离 为 abs(i - j)， 其中 abs 是绝对值函数。
*/