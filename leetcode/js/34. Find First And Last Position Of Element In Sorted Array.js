// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let result = [];
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      result.unshift(middle);
      let candidate = middle;
      if (candidate + 1 < nums.length && nums[candidate + 1] === target) {
        while (nums[candidate + 1] === target) {
          candidate++;
          result.push(candidate);
        }
      }
      candidate = middle;
      if (candidate - 1 >= 0 && nums[candidate - 1] === target) {
        while (nums[candidate - 1] === target) {
          candidate--;
          result.unshift(candidate);
        }
      }
      break;
    }
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return result.length !== 0
    ? result.length === 1
      ? [result[0], result[0]]
      : [result[0], result[result.length - 1]]
    : [-1, -1];
};