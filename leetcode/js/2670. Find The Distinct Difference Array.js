// https://leetcode.com/problems/find-the-distinct-difference-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const distinctDifferenceArray = (nums) => {
  const size = nums.length;
  let suffixes = new Array(size + 1).fill(0);
  let distinctNumbers = new Set();
  for (let i = size - 1; i >= 0; i--) {
    distinctNumbers.add(nums[i]);
    suffixes[i] = distinctNumbers.size;
  }
  let result = [];
  distinctNumbers = new Set();
  for (let i = 0; i < size; i++) {
    distinctNumbers.add(nums[i]);
    result[i] = distinctNumbers.size - suffixes[i + 1];
  }

  return result;
};