// https://leetcode.com/problems/reverse-bits

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  let result = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
    result |= (n & 1) << (31 - i);
    n >>>= 1;
  }

  return result >>> 0;
};