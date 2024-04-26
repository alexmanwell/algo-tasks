// https://leetcode.com/problems/sign-of-the-product-of-an-array

/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = (nums) => {
  let result = 1;
  for (const item of nums) {
    if (item === 0) {
      return 0;
    }
    if (item < 0) {
      result *= -1;
    }
  }

  return result;
};