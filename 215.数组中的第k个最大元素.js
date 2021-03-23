/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function partition(nums, start, end) {
    const pivotVal = nums[start]
    let i = start,
      j = end
    while (i < j) {
      while (i < j && nums[j] >= pivotVal) {
        j--
      }
      nums[i] = nums[j]
      while (i < j && nums[i] <= pivotVal) {
        i++
      }
      nums[j] = nums[i]
    }
    nums[i] = pivotVal
    return i
  }

  function quickSort(nums, start, end) {
    if (start >= end) return

    const pivot = partition(nums, start, end)
    quickSort(nums, start, pivot - 1)
    quickSort(nums, pivot + 1, end)
  }

  quickSort(nums, 0, nums.length - 1)
  return nums[nums.length - k]
};
// @lc code=end