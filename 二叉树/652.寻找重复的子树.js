/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const ans = []
  const pathMap = new Map()

  function dfs(root) {
    if (!root) return '#'

    const left = dfs(root.left)
    const right = dfs(root.right)

    const path = left + ',' + right + ',' + root.val
    pathMap.set(path, (pathMap.get(path) || 0) + 1)
    // 注意点：出现过两次时，把节点加入结果
    if (pathMap.get(path) === 2) {
      ans.push(root)
    }
    // 注意点：返回 path
    return path
  }
  dfs(root)
  return ans
};
// @lc code=end