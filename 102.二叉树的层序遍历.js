/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const ans = [
    [root.val]
  ]
  let stack = [root]
  while (stack.length) {
    const nodes = []
    while (stack.length) {
      const node = stack.shift()
      node.left && nodes.push(node.left)
      node.right && nodes.push(node.right)
    }
    nodes.length && ans.push(nodes.map(node => node.val))
    stack = nodes
  }
  return ans
};
// @lc code=end