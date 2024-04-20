// https://leetcode.com/problems/number-of-common-factors

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const commonFactors = (a, b) => {
  const max = Math.min(a, b);
  let count = 0;
  for (let i = 1; i <= max; i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }

  return count;
};