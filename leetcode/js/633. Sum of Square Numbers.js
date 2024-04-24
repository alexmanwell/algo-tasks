// https://leetcode.com/problems/sum-of-square-numbers

/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = (c) => {
  let [a, b] = [Math.floor(Math.sqrt(c)), 0];
  while (a >= b) {
    const sum = a * a + b * b;
    if (sum === c) {
      return true;
    }
    if (sum < c) {
      b++;
    } else {
      a--;
    }
  }

  return false;
};