/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  // 注意点：入参为当前节点值的区间
  function dfs(root, lower, uppper) {
    if (!root) return true
    if (root.val <= lower || root.val >= uppper) return false
    // 注意点：更新区间
    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, uppper)
  }
  return dfs(root, -Infinity, Infinity)
};
// @lc code=end