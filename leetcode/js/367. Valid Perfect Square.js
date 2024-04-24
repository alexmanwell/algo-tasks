// https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  let candidate = 1;
  while (candidate * candidate <= num) {
    candidate++;
  }
  candidate--;

  return candidate * candidate === num;
};