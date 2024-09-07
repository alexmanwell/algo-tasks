// https://leetcode.com/problems/a-number-after-a-double-reversal

const reverseNumber = (n) => {
  return +n
    .toString()
    .split("")
    .reverse()
    .join("");
};

/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = (num) => {
  return reverseNumber(reverseNumber(num)) === num;
};