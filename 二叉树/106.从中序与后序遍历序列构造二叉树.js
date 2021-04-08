/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function dfs(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (postStart > postEnd) return null

    const rootVal = postorder[postEnd]
    const index = inorder.indexOf(rootVal)
    const leftSize = index - inStart

    const root = new TreeNode(rootVal)
    root.left = dfs(inorder, inStart, index - 1, postorder, postStart, postStart + leftSize - 1)
    root.right = dfs(inorder, index + 1, inEnd, postorder, postStart + leftSize, postEnd - 1)
    return root
  }
  return dfs(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
};
// @lc code=end