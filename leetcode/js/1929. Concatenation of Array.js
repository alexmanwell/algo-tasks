// https://leetcode.com/problems/concatenation-of-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => {
  const size = nums.length;
  let result = new Array(2 * size).fill(null);
  for (let i = 0; i < size; i++) {
    result[i] = nums[i];
    result[i + size] = nums[i];
  }

  return result;
};