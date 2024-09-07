// https://leetcode.com/problems/a-number-after-a-double-reversal

/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = (num) => {
  return num === 0 || num % 10 !== 0;
};