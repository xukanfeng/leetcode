/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const ans = []
  // 把此类问题比作排队看后面第一个比自己高的
  const stack = []
  const map = new Map()
  // 从后面开始遍历往前面看
  for (let i = nums2.length - 1; i >= 0; i--) {
    // 矮个子起开，要你也没用，反正看不见你  
    while (stack.length && nums2[i] >= stack[stack.length - 1]) {
      stack.pop()
    }
    // 有比我个子高的吗？有就是你了，没有就是 -1
    map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1)
    stack.push(nums2[i])
  }
  nums1.forEach(item => {
    ans.push(map.get(item))
  })
  return ans
}
// @lc code=end