// https://leetcode.com/problems/keep-multiplying-found-values-by-two

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === original) {
      original *= 2;
    }
  }

  return original;
};