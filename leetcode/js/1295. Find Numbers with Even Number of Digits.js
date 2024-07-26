// https://leetcode.com/problems/find-numbers-with-even-number-of-digits

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  let count = 0;
  for (const num of nums) {
    const size = num.toString().length;
    if (size % 2 === 0) {
      ++count;
    }
  }

  return count;
};