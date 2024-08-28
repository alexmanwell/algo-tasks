// https://leetcode.com/problems/number-of-even-and-odd-bits

/**
 * @param {number} n
 * @return {number[]}
 */
const evenOddBit = (n) => {
  let evens = 0;
  let odds = 0;
  const binary = n.toString(2).split("").map(Number).reverse();
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === 1) {
      if (i % 2 === 0) {
        ++evens;
      } else {
        ++odds;
      }
    }
  }

  return [evens, odds];
};