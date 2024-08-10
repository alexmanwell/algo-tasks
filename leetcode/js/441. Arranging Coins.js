// https://leetcode.com/problems/arranging-coins

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  let coin = 0;
  let row = 0;
  while (n >= 0) {
    ++coin;
    if (n - coin < 0) {
      break;
    }
    n -= coin;
    ++row;
  }

  return row;
};