/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const lcs = longestCommonSubsequence(word1, word2)
  return word1.length - lcs + word2.length - lcs
};
// @lc code=end