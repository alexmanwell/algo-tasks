// https://leetcode.com/problems/number-of-1-bits

const toBinary = (n) => {
  let bits = [];
  while (n > 0) {
    let tail = n % 2;
    bits.push(tail);
    n = Math.floor(n / 2);
  }

  return bits.reverse();
};

/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = (n) => {
  const bits = toBinary(n);
  return bits.reduce((acc, d) => d === 1 ? ++acc : acc, 0);
};