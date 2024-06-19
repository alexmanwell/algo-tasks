// https://leetcode.com/problems/sum-multiples

/**
 * @param {number} n
 * @return {number}
 */
const sumOfMultiples = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % (3 * 5 * 7) === 0) {
      sum += i;
    } else if (i % (3 * 5) === 0) {
      sum += i;
    } else if (i % (5 * 7) === 0) {
      sum += i;
    } else if (i % (3 * 7) === 0) {
      sum += i;
    } else if (i % 3 === 0) {
      sum += i
    } else if (i % 5 === 0) {
      sum += i
    } else if (i % 7 === 0) {
      sum += i
    }
  }

  return sum;
};