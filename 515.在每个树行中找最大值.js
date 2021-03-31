/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  if (!root) return []
  const ans = [root.val]
  let queue = [root]

  while (queue.length) {
    const nodes = []
    while (queue.length) {
      const node = queue.shift()
      node.left && nodes.push(node.left)
      node.right && nodes.push(node.right)
    }
    // 注意点：nodes 数组要先 map 为 val 数组
    nodes.length && ans.push(nodes.map(node => node.val).reduce((a, b) => Math.max(a, b)))
    queue = nodes
  }
  return ans
};
// @lc code=end