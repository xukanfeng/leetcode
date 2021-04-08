/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  /*
  function check(left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    return left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
  }
  return check(root, root)
  */

  if (!root) return true
  const queue = []
  queue.push(root.left, root.right)
  while (queue.length) {
    const p = queue.shift()
    const q = queue.shift()
    if (!p && !q) continue
    if ((!p || !q) || p.val !== q.val) return false
    queue.push(p.left)
    queue.push(q.right)

    queue.push(p.right)
    queue.push(q.left)
  }
  return true
};
// @lc code=end