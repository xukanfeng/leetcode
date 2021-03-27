/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
// 分治
var diffWaysToCompute = function (expression) {
  const ans = []

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i]
    if (char === '*' || char === '-' || char === '+') {
      // 注意点：以运算符为中心，分割成左右两个子字符串
      const left = diffWaysToCompute(expression.slice(0, i))
      const right = diffWaysToCompute(expression.slice(i + 1))

      for (let m of left) {
        for (let n of right) {
          if (char === '*') ans.push(m * n)
          else if (char === '-') ans.push(m - n)
          else if (char === '+') ans.push(m + n)
        }
      }
    }
  }
  // 注意点：如果 ans === []，说明 expression 是纯数字字符串
  if (ans.length === 0) {
    ans.push(Number(expression))
  }
  return ans
};
// @lc code=end

