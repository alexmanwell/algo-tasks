// https://leetcode.com/problems/neither-minimum-nor-maximum

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNonMinOrMax = (nums) => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  for (const num of nums) {
    if (num !== min && num !== max) {
      return num;
    }
  }

  return -1;
};