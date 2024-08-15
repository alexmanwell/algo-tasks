// https://leetcode.com/problems/sort-array-by-parity

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
  let result = new Array(nums.length).fill(null);
  let start = 0;
  let end = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result[start] = nums[i];
      ++start;
    } else {
      result[end] = nums[i];
      --end;
    }
  }

  return result;
};