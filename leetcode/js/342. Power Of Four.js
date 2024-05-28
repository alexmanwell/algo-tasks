// https://leetcode.com/problems/power-of-four

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = (n) => {
  return n > 0 && Number.isInteger(Math.log(n) / Math.log(4));
};