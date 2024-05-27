// https://leetcode.com/problems/counting-bits

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  let bits = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    const bit = i.toString(2);
    let count = 0;
    for (let digit of bit) {
      if (digit === "1") {
        ++count;
      }
    }
    bits[i] = count;
  }

  return bits;
};