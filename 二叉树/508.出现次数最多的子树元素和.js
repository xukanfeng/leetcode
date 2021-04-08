/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  const ans = []
  const map = new Map()
  let max = 0

  function dfs(root) {
    if (!root) return 0

    const leftSum = dfs(root.left)
    const rightSum = dfs(root.right)
    const sum = root.val + leftSum + rightSum
    map.set(sum, (map.get(sum) || 0) + 1)
    max = Math.max(max, map.get(sum))
    return sum
  }
  dfs(root)
  map.forEach((value, key) => value === max && ans.push(key))
  return ans
};
// @lc code=end