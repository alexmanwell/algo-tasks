// https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
const numOfPairs = (nums, target) => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const a = nums[i];
      const b = nums[j];
      if (a.length + b.length === target.length) {
        if (a + b === target) {
          ++count;
        }
        if (b + a === target) {
          ++count;
        }
      }
    }
  }

  return count;
};