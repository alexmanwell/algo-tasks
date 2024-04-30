// https://leetcode.com/problems/maximum-difference-between-increasing-elements

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = (nums) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  let minIndex = nums.length;
  let maxIndex = nums.length;
  let diff = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      [min, minIndex] = [nums[i], i];
      if (minIndex > maxIndex) {
        max = 0;
      }
    }
    if (nums[i] > max) {
      [max, maxIndex] = [nums[i], i];
    }
    if (minIndex < maxIndex && min < max) {
      if (diff < max - min) {
        diff = max - min;
      }
    }
  }

  return diff;
};