// https://leetcode.com/problems/smallest-even-multiple

/**
 * @param {number} n
 * @return {number}
 */
const smallestEvenMultiple = (n) => {
  let result = 0;
  for (let i = n; i < Infinity; i += n) {
    if (i % 2 === 0 && i % n === 0) {
      result = i;
      break;
    }
  }

  return result;
};