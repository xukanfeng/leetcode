/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  function dfs(root) {
    if (!root) return
    // 注意点：先递归展开左右子树
    dfs(root.left)
    dfs(root.right)

    const left = root.left
    const right = root.right
    root.left = null
    root.right = left
    // 注意点：将原右子树接到现右子树（即原左子树）末尾
    let p = root
    while (p.right) p = p.right
    p.right = right
  }
  dfs(root)
};
// @lc code=end