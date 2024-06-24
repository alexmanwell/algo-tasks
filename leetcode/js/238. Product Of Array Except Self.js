// https://leetcode.com/problems/product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let result = new Array(nums.length);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  prefix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  return result;
};