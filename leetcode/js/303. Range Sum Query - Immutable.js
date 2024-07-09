// https://leetcode.com/problems/range-sum-query-immutable

/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  const size = nums.length;
  this.arr = Array(size + 1).fill(0);
  for (let i = 0; i < size; ++i) {
    this.arr[i + 1] = this.arr[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.arr[right + 1] - this.arr[left];
};