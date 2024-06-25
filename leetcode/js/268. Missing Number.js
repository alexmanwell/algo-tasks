// https://leetcode.com/problems/missing-number

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let result = nums.length;
  for (let i = 0; i < nums.length; ++i) {
    result ^= i ^ nums[i];
  }

  return result;
};