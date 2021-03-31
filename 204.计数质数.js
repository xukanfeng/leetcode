/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const primes = new Array(n).fill(true)
  // 注意点： i * i
  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      // 注意点： i * i; j += i
      for (let j = i * i; j < n; j += i) {
        primes[j] = false
      }
    }
  }
  let count = 0
  for (let i = 2; i < n; i++) {
    if (primes[i]) count++
  }
  return count
};
// @lc code=end