/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const value = this.cache.get(key)
  // 注意点：必须用 undefined 来判断，避免空值判断错误
  if (value === undefined) return -1

  this.cache.delete(key)
  this.cache.set(key, value)
  return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) this.cache.delete(key)
  this.cache.set(key, value)

  if (this.cache.size > this.capacity) {
    // 注意点：keys() 返回迭代器，keys().next() 获取第一个迭代值
    this.cache.delete(this.cache.keys().next().value)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

