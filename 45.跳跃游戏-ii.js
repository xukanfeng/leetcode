/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0
  let curPos = 0
  let maxPos = 0
  // 注意点：到达最后一个位置即可
  for (let i = 0; i < nums.length - 1; ++i) {
    maxPos = Math.max(maxPos, nums[i] + i)
    // 当前位置和索引i相等时（即当前位置最后一种跳法跳完时），将最远跳跃位置赋值给当前位置
    if (i === curPos) {
      curPos = maxPos
      steps++
    }
  }
  return steps
};
// @lc code=end