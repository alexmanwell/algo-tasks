// https://leetcode.com/problems/alternating-digit-sum

/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = (n) => {
  let arr = n.toString().split("").map(Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += i % 2 === 0 ? arr[i] : (-1) * arr[i];
  }

  return sum;
};