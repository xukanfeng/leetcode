/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  /*
  function dfs(root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    if (!root.left) return dfs(root.right) + 1
    if (!root.right) return dfs(root.left) + 1
    return Math.min(dfs(root.left), dfs(root.right)) + 1
  }
  return dfs(root)
  */

  if (!root) return 0
  let ans = 0
  let queue = [root]
  while (queue.length) {
    ans++
    const nodes = []
    while (queue.length) {
      const node = queue.shift()
      if (!node.left && !node.right) return ans
      node.left && nodes.push(node.left)
      node.right && nodes.push(node.right)
    }
    queue = nodes
  }
  return ans
};
// @lc code=end