// https://leetcode.com/problems/build-array-from-permutation

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = (nums) => {
  let result = new Array(nums.length).fill(null);
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[nums[i]];
  }

  return result;
};