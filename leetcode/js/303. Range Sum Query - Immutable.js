// https://leetcode.com/problems/range-sum-query-immutable

/**
 * @param {number[]} nums
 */
class NumArray {
  #nums;

  constructor(nums) {
    this.#nums = nums;
  };

  /**
   * @param {number} left
   * @param {number} right
   * @return {number}
   */
  sumRange(left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += this.#nums[i];
    }

    return sum;
  };
}