/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return []
  const ans = []
  const stack = [root]
  // 注意点：后续遍历和前序、中序不一样，改用层序遍历处理
  while (stack.length) {
    root = stack.pop()
    ans.unshift(root.val)
    root.left && stack.push(root.left)
    root.right && stack.push(root.right)
  }
  return ans
};
// @lc code=end