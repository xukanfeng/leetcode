/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const nodes = []
  let p = head
  while (p) {
    nodes.push(p)
    p = p.next
  }

  let i = 0
  let j = nodes.length - 1
  // 注意点
  while (i < j) {
    nodes[i].next = nodes[j]
    i++
    // 注意点：退出循环，否则会多添加一个节点
    if (i === j) break
    nodes[j].next = nodes[i]
    j--
  }
  // 注意点
  nodes[i].next = null
};
// @lc code=end