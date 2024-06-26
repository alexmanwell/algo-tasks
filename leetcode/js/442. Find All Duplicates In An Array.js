// https://leetcode.com/problems/find-all-duplicates-in-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
  let set = new Set();
  let result = [];
  for (let n of nums) {
    if (set.has(n)) {
      result.push(n);
    }
    set.add(n);
  }

  return result;
};