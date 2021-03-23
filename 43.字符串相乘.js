/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0"
  // 注意点：结果数组
  let res = new Array(num1.length + num2.length).fill(0)
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      // 各位相乘，与当前结果末尾相加
      let tmp = Number(num1[i]) * Number(num2[j]) + res[i + j + 1]
      // 更新结果末尾
      res[i + j + 1] = tmp % 10
      // 末尾左移
      res[i + j] += parseInt(tmp / 10)
    }
  }
  while(res[0] === 0) {
    res.shift()
  }
  // 合并结果
  return res.join("")
};
// @lc code=end

