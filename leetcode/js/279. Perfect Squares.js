// https://leetcode.com/problems/perfect-squares

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
  let max = Math.floor(Math.sqrt(n));
  let listOfAmountSquares = new Array(n + 1).fill(Infinity);
  listOfAmountSquares[0] = 0;
  for (let i = 1; i <= max; ++i) {
    const square = i ** 2;
    for (let j = square; j <= n; ++j) {
      listOfAmountSquares[j] = Math.min(listOfAmountSquares[j], listOfAmountSquares[j - square] + 1);
    }
  }

  return  listOfAmountSquares[n];
};