/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  /*
  if (!root) return 0
  let max = -Infinity

  function dfs(root, depth) {
    if (!root) return
    if (!root.left && !root.right) {
      max = Math.max(max, depth + 1)
      return
    }
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
  }
  dfs(root, 0)
  return max
  */
  function dfs(root) {
    if (!root) return 0
    return Math.max(dfs(root.left), dfs(root.right)) + 1
  }
  return dfs(root)
};
// @lc code=end