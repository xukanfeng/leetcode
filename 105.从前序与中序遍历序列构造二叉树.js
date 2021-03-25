/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function dfs(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd) return null

    const rootVal = preorder[preStart]
    const index = inorder.indexOf(rootVal)
    // 注意点：获取左子树数组长度
    const leftSize = index - inStart

    const root = new TreeNode(rootVal)
    root.left = dfs(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index - 1)
    root.right = dfs(preorder, preStart + leftSize + 1, preEnd, inorder, index + 1, inEnd)
    return root
  }
  return dfs(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};
// @lc code=end