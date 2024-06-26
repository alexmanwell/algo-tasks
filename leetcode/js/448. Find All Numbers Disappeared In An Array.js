// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  let count = 0;
  let index = 0;
  while (count < nums.length) {
    while (nums[index] === count) {
      ++index;
    }
    if (nums[index] !== count + 1) {
      result.push(count + 1);
    }
    ++count;
  }

  return result;
};