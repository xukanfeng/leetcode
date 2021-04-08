/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  // 一个节点的前缀和就是该节点到根之间的路径和
  // 两个节点前缀和之差即是这两个节点间的路径和
  const prefixSumCount = new Map()
  prefixSumCount.set(0, 1)
  let ans = 0

  function dfs(root, currSum) {
    if (!root) return
    currSum += root.val
    // 注意点：更新结果
    ans += prefixSumCount.get(currSum - sum) || 0

    prefixSumCount.set(currSum, (prefixSumCount.get(currSum) || 0) + 1)
    dfs(root.left, currSum);
    dfs(root.right, currSum);
    prefixSumCount.set(currSum, prefixSumCount.get(currSum) - 1);
  }
  dfs(root, 0)
  return ans
};
// @lc code=end