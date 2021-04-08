/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const ans = []
  for (let i = 0; i < s.length; i++) {
    if (ans.length === 0) ans.push(s[i])
    else {
      if (ans.indexOf(s[i]) === -1) {
        while(ans.length > 0) {
          const top = ans.pop()
          // 如果 top 值比当前值大，去 [i, s.length - 1] 中找是否还存在 top 值，如果存在，这个 top 值就可以删除了，后续遍历还有机会再加入栈中
          if (top > s[i] && s.slice(i).indexOf(top) !== -1) {
            continue
          } else {
            // 如果不存在，就把 top 值再放回栈中
            ans.push(top)
            break
          }
        }
        ans.push(s[i])
      }
    }
  }
  return ans.join("")
};
// @lc code=end

// 给你一个字符串 s，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。