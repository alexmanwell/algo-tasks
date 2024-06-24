// https://leetcode.com/problems/maximum-product-of-three-numbers

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  nums = nums.sort((a, b) => b - a);
  const last = nums.length - 1;
  return Math.max(
    nums[0] * nums[1] * nums[2] || 0,
    nums[last] * nums[last - 1] * nums[0] || 0,
    nums[last] * nums[last - 1] * nums[last - 2] || 0
  )
};