/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
/**
 * 假设一个元素小于 L 标记为 0，位于 [L, R] 之间标记为 1，大于 R 标记为 2。
 * 问题转化为：找出不包含 2 且至少包含一个 1 的子数组数量。可以看作是所有的 2 将数组拆分为仅包含 0 或 1 的子数组。
 * 进一步转化为：计算每个只包含 0 或 1 的数组中，至少包含一个 1 的子数组数量。
 * 最后转化为：找出所有只包含 0 或 1 的子数组，再从中减去只包含 0 的子数组。
 */
var numSubarrayBoundedMax = function(A, L, R) {
  function count(A, bound) {
    let ans = 0
    let cur = 0 // 在 bound 左边，小于等于 bound 的连续元素数量
    for (let n of A) {
      // bound = 5, [3, 2, 1, 4, 5], 则 5 左边的子数组数量为 1 + 2 + 3 + 4 = 10
      cur = n <= bound ? cur + 1 : 0
      ans += cur
    }
    return ans
  }
  // 注意点：所有只包含 0 或 1 的子数组，减去只包含 0 的子数组
  return count(A, R) - count(A, L - 1)
};
// @lc code=end

