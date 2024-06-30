// https://leetcode.com/problems/single-number-ii

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let uniques = new Set();
  let duplicates = new Array(Math.floor(nums.length / 3));
  let index = 0;
  for (const n of nums) {
    if (!duplicates.includes(n)) {
      if (uniques.has(n)) {
        duplicates[index] = n;
        ++index;
        uniques.delete(n);
      } else {
        uniques.add(n);
      }
    }
  }

  return [...uniques][0];
};