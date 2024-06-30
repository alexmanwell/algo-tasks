// https://leetcode.com/problems/single-number-iii

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = (nums) => {
  let set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      set.delete(n);
    } else {
      set.add(n);
    }
  }

  return [...set];
};