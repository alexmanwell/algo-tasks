// https://leetcode.com/problems/complement-of-base-10-integer

/**
 * @param {number} n
 * @return {number}
 */
const bitwiseComplement = (n) => {
  const digits = n.toString(2).split("").map(Number);
  const replaceDigits = digits.map(d => d = d === 1 ? 0 : 1);

  return replaceDigits.reduce((acc, d, i, arr) =>
      acc + d * Math.pow(2, arr.length - 1 - i),
    0);
};