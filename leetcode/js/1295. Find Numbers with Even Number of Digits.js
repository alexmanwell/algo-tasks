// https://leetcode.com/problems/find-numbers-with-even-number-of-digits

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  return nums.reduce((acc, num) => {
    return (num.toString().length % 2 === 0) ? acc + 1 : acc;
  }, 0)
};