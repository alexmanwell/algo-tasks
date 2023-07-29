// https://leetcode.com/problems/range-sum-query-mutable/

/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.numbers = nums;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.numbers[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += this.numbers[i];
  }

  return sum;
};