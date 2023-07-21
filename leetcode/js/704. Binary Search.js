// https://leetcode.com/problems/binary-search/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let result = -1;

  while (start <= end) {
    const middle = Math.round((start + end) / 2);
    if (nums[middle] > target) {
      end -= 1;
    } else if (nums[middle] < target) {
      start += 1;
    } else if (nums[middle] === target) {
      result = middle;
      break;
    }
  }

  return result;
};