/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const ans = []

  function dfs(root, sum, path) {
    if (!root) return
    if (!root.left && !root.right) {
      if (sum === root.val) ans.push([...path, root.val])
      return
    }
    path.push(root.val)
    dfs(root.left, sum - root.val, path)
    path.pop(root.val)

    path.push(root.val)
    dfs(root.right, sum - root.val, path)
    path.pop(root.val)
  }
  dfs(root, targetSum, [])
  return ans
};
// @lc code=end