/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  /*
  function depth(root) {
    if (!root) return 0
    return Math.max(depth(root.left), depth(root.right)) + 1
  }

  function dfs(root) {
    if (!root) return true
    return Math.abs(depth(root.left) - depth(root.right)) <= 1 && dfs(root.left) && dfs(root.right)
  }
  return dfs(root)
  */
  function dfs(root) {
    if (!root) return 0
    const leftDepth = dfs(root.left)
    const rightDepth = dfs(root.right)
    if (leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) {
      return -1
    }
    return Math.max(leftDepth, rightDepth) + 1
  }
  return dfs(root) >= 0
};
// @lc code=end