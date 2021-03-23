/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
  if (!root) return []
  const ans = [[root.val]]
  let queue = [root]
  let left = false
  while(queue.length) {
    const nodes = []
    while(queue.length) {
      const node = left ? queue.pop() : queue.shift()
      node.left && (left ? nodes.push(node.left) : nodes.unshift(node.left))
      node.right && (left ? nodes.push(node.right) : nodes.unshift(node.right))
    }
    nodes.length && ans.push(nodes.map(node => node.val))
    left = !left
    queue = nodes
  }
  return ans
};
// @lc code=end

