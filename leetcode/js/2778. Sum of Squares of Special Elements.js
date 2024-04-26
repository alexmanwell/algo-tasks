// https://leetcode.com/problems/sum-of-squares-of-special-elements

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfSquares = (nums) => {
  let specials = [];
  const length = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (length % (i + 1) === 0) {
      specials.push(nums[i]);
    }
  }

  return specials.reduce((acc, n) => acc + n * n, 0);
};