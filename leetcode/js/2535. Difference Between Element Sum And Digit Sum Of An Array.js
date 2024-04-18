// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array

const sumDigits = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) =>
      a + b
    );
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = (nums) => {
  return Math.abs(
    nums.reduce((a, b) => a + b) -
    nums.reduce((a, b) => a + sumDigits(b), 0)
  );
};