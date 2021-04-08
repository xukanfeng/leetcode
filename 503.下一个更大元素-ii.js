/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const ans = []
  const stack = []
  const n = nums.length

  // 假装这个数组长度翻倍了
  for (let i = 2 * n - 1; i >= 0; i--) {
    // 索引要求模
    while (stack.length && nums[i % n] >= stack[stack.length - 1]) {
      stack.pop()
    }
    ans[i % n] = stack.length ? stack[stack.length - 1] : -1
    stack.push(nums[i % n])
  }
  return ans
};
// @lc code=end