// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const size = digits.length;
  let result = new Array(size).fill(0);
  let rank = 0;
  digits[size - 1] = digits[size - 1] + 1;
  for (let i = size - 1; i >= 0; i--) {
    const digit = digits[i] + rank;
    rank = 0;
    if (digit < 10) {
      result[i] = digit;
    } else {
      rank = 1;
      result[i] = digit - 10;
    }
  }
  if (rank === 1) {
    result.unshift(rank);
  }

  return result;
};