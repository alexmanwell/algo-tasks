// https://leetcode.com/problems/array-partition

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = nums.length - 1; i >= 0; i -= 2) {
    result += Math.min(nums[i], nums[i - 1]);
  }

  return result;
};