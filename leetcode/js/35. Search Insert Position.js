// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  if (nums[0] > target) {
    return 0;
  }
  let left = 0;
  let right = nums.length - 1;
  let index = -1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      index = middle;
      break;
    }
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    index = middle;
  }
  if (nums[index] < target && nums[index + 1] > target) {
    index = index + 1;
  }

  return index;
};