// https://leetcode.com/problems/maximum-product-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let min = nums[0];
  let max = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const tempMin = min;
    const tempMax = max;
    max = Math.max(nums[i], tempMin * nums[i], tempMax * nums[i]);
    min = Math.min(nums[i], tempMin * nums[i], tempMax * nums[i]);
    result = Math.max(result, max);
  }

  return result;
};