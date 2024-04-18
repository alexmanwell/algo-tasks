// https://leetcode.com/problems/longest-alternating-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
const alternatingSubarray = (nums) => {
  let result = 0;
  let max = 0;
  let k = 2;
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = nums[i + 1] - nums[i];
    if (diff === (-1) ** k) {
      if (max === 0) {
        ++max;
      }
      ++max;
      ++k;
    } else {
      if (diff === 1 ** (k + 1)) {
        --i;
      }
      result = Math.max(max, result);
      max = 0;
      k = 2;
    }
  }

  result = Math.max(max, result);
  return result === 0 ? -1 : result;
};