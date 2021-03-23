/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  /*
  const nums = []

  function dfs(root, num) {
    if (!root) return
    if (!root.left && !root.right) {
      num += root.val
      nums.push(Number(num))
      return
    }
    dfs(root.left, num + root.val)
    dfs(root.right, num + root.val)
  }
  dfs(root, '')
  return nums.length ? nums.reduce((a, b) => a + b) : 0
  */
  function dfs(node, sum) {
    if (!node) return 0

    sum = 10 * sum + node.val
    if (!node.left && !node.right) {
      return sum
    }
    return dfs(node.left, sum) + dfs(node.right, sum)
  }
  return dfs(root, 0)
};
// @lc code=end