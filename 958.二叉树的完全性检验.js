/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
var isCompleteTree = function (root) {
  if (!root) return true
  let queue = [root]
  let reachedEnd = false
  while (queue.length) {
    const node = queue.shift()
    if (reachedEnd && node !== null) {
      return false
    }
    if (node === null) {
      reachedEnd = true
      continue
    }
    queue.push(node.left)
    queue.push(node.right)
  }
  return true
};
// @lc code=end