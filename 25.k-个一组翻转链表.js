/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  /*
  function reverse(p) {
    let pre = null,
      cur = p,
      next = p
    while(cur !== null) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
  */
  function reverse(p, q) {
    let pre = null,
      cur = p,
      next = p
    while (cur !== q) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
  if (!head) return null
  let p = head,
    q = head
  for (let i = 0; i < k; i++) {
    if (q === null) return head
    q = q.next
  }
  const newHead = reverse(p, q)
  p.next = reverseKGroup(q, k)
  return newHead
};
// @lc code=end