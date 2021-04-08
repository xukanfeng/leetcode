/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = null
  let curr = new ListNode()
  while (l1 && l2) {
    if (l1.val < l2.val) {
      // 注意点：头节点特殊处理
      if (!head) head = l1
      curr.next = l1
      l1 = l1.next
    } else {
      if (!head) head = l2
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }
  if (l1) curr.next = l1
  if (l2) curr.next = l2
  // 注意点：只有一个链表非空时，返回 curr.next
  return head || curr.next
};
// @lc code=end