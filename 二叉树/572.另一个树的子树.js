/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  function isSameTree(s, t) {
    if (!s && !t) return true
    if (!s || !t) return false
    return s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
  }

  function dfs(s, t) {
    if (!s) return false
    if (isSameTree(s, t)) return true
    return dfs(s.left, t) || dfs(s.right, t)
  }
  return dfs(s, t)
};
// @lc code=end