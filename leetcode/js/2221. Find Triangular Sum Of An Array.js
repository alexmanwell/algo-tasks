// https://leetcode.com/problems/find-triangular-sum-of-an-array

/**
 * @param {number[]} nums
 * @return {number}
 */
const triangularSum = function (nums) {
  while (nums.length > 1) {
    let result = new Array(nums.length - 1).fill(0);
    for (let i = 0; i < result.length; i++) {
      result[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums = result;
  }

  return nums[0];
};