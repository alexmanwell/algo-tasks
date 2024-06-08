// https://leetcode.com/problems/majority-element-ii

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      ++count;
    } else {
      if (count > nums.length / 3) {
        result.push(nums[i]);
      }
      count = 1;
    }
  }

  return result;
};