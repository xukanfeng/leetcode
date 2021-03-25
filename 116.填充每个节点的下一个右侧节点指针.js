/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root

  function dfs(p, q) {
    if (!p || !q) return
    p.next = q
    // 注意点：入参为两个节点，做三次 dfs
    dfs(p.left, p.right)
    dfs(p.right, q.left)
    dfs(q.left, q.right)
  }
  dfs(root.left, root.right)
  return root
};
// @lc code=end