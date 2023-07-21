// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = (nums) => {
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive++;
    } else if (nums[i] < 0) {
      negative++
    }
  }

  return (positive >= negative) ? positive : negative;
};