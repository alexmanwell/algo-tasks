// https://leetcode.com/problems/largest-number-at-least-twice-of-others

/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
  if (nums.length === 2) {
    if (nums[0] >= 2 * nums[1]) {
      return 0;
    } else if (nums[1] >= 2 * nums[0]) {
      return 1;
    } else {
      return -1;
    }
  }
  let max = Math.min(nums[0], nums[1]);
  let lastMax = Math.max(nums[0], nums[1]);
  let index = nums[0] > nums[1] ? 0 : 1;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > lastMax) {
      max = lastMax;
      lastMax = nums[i];
      index = i;
    } else if (nums[i] > max) {
      max = nums[i];
    }
  }

  return lastMax >= 2 * max ? index : -1;
};