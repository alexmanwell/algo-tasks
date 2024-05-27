// https://leetcode.com/problems/power-of-two

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  let number = n;
  if (n === 1) {
    return true;
  }
  if (n % 2 !== 0) {
    return false;
  }
  let count = 0;
  while (number > 1) {
    ++count;
    number /= 2;
  }

  return Math.pow(2, count) === n;
};