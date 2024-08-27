// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer

/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  const convertToArray = (n) => n.toString().split("").map(Number);
  return (
    convertToArray(n).reduce((acc, a) => acc * a, 1)
    -
    convertToArray(n).reduce((a, b) => a + b)
  );
};