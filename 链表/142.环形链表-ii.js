/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快指针走的距离：a + n * (b + c) + b
// 慢指针走的距离：a + b
// a + n * (b + c) + b === 2 * (a + b)
// a = c + (n - 1) * (b + c)
// 从相遇点到入环点的距离加上 n − 1 圈的环长，恰好等于从链表头部到入环点的距离
var detectCycle = function(head) {
    if (!head || !head.next) return null
    let slow = head, fast = head
    while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) {
        // 注意点：p 指向链表头
        let p = head
        while(p !== slow) {
          p = p.next
          slow = slow.next
        }
        return p
      }
    }
    return null
};
// @lc code=end

