// https://leetcode.com/problems/monotonic-array

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = (nums) => {
  let index = 0;
  while (nums[index] <= nums[index + 1]) {
    ++index;
  }
  if (index === nums.length - 1) {
    return true;
  }

  index = 0;
  while (nums[index] >= nums[index + 1]) {
    ++index;
  }

  return index === nums.length - 1;
};