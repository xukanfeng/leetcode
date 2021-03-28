/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  /*
  let ans = null
  // 注意点：判断 root 是否是最近公共祖先
  function dfs(root) {
    if (!root) return false

    const lson = dfs(root.left)
    const rson = dfs(root.right)

    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root
    }
    return lson || rson || root.val === p.val || root.val === q.val
  }

  dfs(root)
  return ans
  */

  // 注意点：获取最近公共祖先
  function dfs(root) {
    if (!root || root === p || root === q) return root

    const left = dfs(root.left)
    const right = dfs(root.right)
    
    if (!left) return right
    if (!right) return left
    return root
  }
  return dfs(root)
};
// @lc code=end

