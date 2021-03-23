/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1
  while(i >= 0 || j >= 0) {
    let num1 = i >= 0 ? nums1[i] : -Infinity
    let num2 = j >= 0 ? nums2[j] : -Infinity
    if (num1 > num2) {
      nums1[i + j + 1] = num1
      i--
    } else {
      nums1[i + j + 1] = num2
      j--
    }
  }
};
// @lc code=end

