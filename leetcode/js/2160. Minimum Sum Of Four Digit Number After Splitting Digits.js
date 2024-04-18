// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = (num) => {
  const arr = num
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => a - b)
    .map(String);
  return (
    Number(arr[0] + arr[2])
    +
    Number(arr[1] + arr[3])
  );
};