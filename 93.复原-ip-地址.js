/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const ans = []
  const SEG_COUNT = 4
  const segments = new Array(SEG_COUNT)

  // 注意点：入参为当前处理 ip 段的 segId，和当前处理的字符串索引
  function dfs(segId, start) {
    if (segId === SEG_COUNT) {
      if (start === s.length) {
        ans.push(segments.join('.'))
      }
      return
    } else {
      if (start === s.length) {
        return
      }
    }

    if (s[start] === '0') {
      segments[segId] = 0
      dfs(segId + 1, start + 1)
    }

    let addr = 0
    for (let i = start; i < s.length; i++) {
      addr = 10 * addr + (s[i] - '0')
      // 注意点：addr > 0，不再处理字符 '0'
      if (addr > 0 && addr <= 255) {
        segments[segId] = addr
        dfs(segId + 1, i + 1)
      } else {
        break
      }
    }
  }
  dfs(0, 0)
  return ans
};
// @lc code=end