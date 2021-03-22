/*
 * @lc app=leetcode.cn id=1146 lang=javascript
 *
 * [1146] 快照数组
 */

// @lc code=start
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.arr = new Array(length).fill(0).map(() => new Map())
  this.snapId = 0
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.arr[index].set(this.snapId, val)
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  this.snapId++
  return this.snapId - 1
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  // 找到这个数的所有记录
  let snapIds = [...this.arr[index].keys()]
  // 二分查找，找到 <= snap_id 的值
  let low = 0,
    high = snapIds.length - 1,
    mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (snapIds[mid] < snap_id) {
      low = mid + 1
    } else if (snapIds[mid] > snap_id) {
      high = mid - 1
    } else if (snapIds[mid] === snap_id) {
      return this.arr[index].get(snap_id)
    }
  }
  return this.arr[index].get(snapIds[low - 1]) || null
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
// @lc code=end