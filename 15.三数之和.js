/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  function twoSum(nums, target) {
    const res = []
    let i = 0,
      j = nums.length - 1
    while (i < j) {
      const left = nums[i],
        right = nums[j]
      const sum = left + right
      if (sum < target) i++
      else if (sum > target) j--
      else {
        res.push([left, right])
        // 注意点：nums[i] === left
        while (i < j && nums[i] === left) i++
        while (i < j && nums[j] === right) j--
      }
    }
    return res
  }

  const ans = []
  nums.sort((a, b) => a > b ? 1 : -1)
  let i = 0
  // 注意点：while 循环内容和 twoSum() 大致相同
  while (i < nums.length) {
    const num = nums[i]
    const res = twoSum(nums.slice(i + 1), 0 - num)
    res.forEach(item => {
      ans.push([...item, num])
    })
    while (i < nums.length && nums[i] === num) i++
  }
  return ans
};
// @lc code=end