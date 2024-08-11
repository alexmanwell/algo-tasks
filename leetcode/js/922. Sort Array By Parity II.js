// https://leetcode.com/problems/sort-array-by-parity-ii

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = (nums) => {
  let index = 0;
  while (index < nums.length) {
    if (index % 2 === 0 && nums[index] % 2 !== 0) {
      for (let i = index + 1; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
          nums = swap(nums, index, i);
          break;
        }
      }
    }
    if (index % 2 !== 0 && nums[index] % 2 === 0) {
      for (let i = index + 1; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
          nums = swap(nums, index, i);
          break;
        }
      }
    }
    ++index;
  }

  return nums;
};