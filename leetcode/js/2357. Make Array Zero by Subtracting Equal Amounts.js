// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = (nums) => {
  if (nums.filter((elem) => elem > 0).length === 0) {
    return 0;
  }
  let count = 0;
  let sum = -1;
  while (sum !== 0) {
    count++;
    const min = Math.min(...nums.filter((elem) => elem > 0));
    nums = nums.map((elem) => {
      if (elem > 0) {
        elem = elem - min
      }
      return elem;
    });
    sum = nums.reduce((acc, elem) => {
      return acc + elem;
    });
  }

  return count;
};