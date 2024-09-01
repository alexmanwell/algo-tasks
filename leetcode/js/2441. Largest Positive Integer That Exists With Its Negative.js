// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = (nums) => {
  let result = -1;
  for (const n of nums) {
    if (result <= n && nums.includes(-n)) {
      result = n;
    }
  }

  return result;
};