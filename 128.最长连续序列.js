/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  // 将集合初始化为数组中的数字
  const set = new Set(nums)
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    // 如果当前集合中不存在比当前数字小 1 的数字，则以当前数字为最小值，根据集合中的数字去搜索最长序列
    if (!set.has(nums[i] - 1)) {
      let currentNum = nums[i]
      let longest = 1
      while (set.has(currentNum + 1)) {
        currentNum += 1
        longest++
      }
      ans = Math.max(ans, longest)
    }
  }
  return ans
};
// @lc code=end

/*
给定一个未排序的整数数组 nums， 找出数字连续的最长序列（ 不要求序列元素在原数组中连续） 的长度。
*/