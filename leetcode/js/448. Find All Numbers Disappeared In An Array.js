// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  let set = new Set();
  for (let i = 1; i <= nums.length; i++) {
    set.add(i);
  }
  for (let n of nums) {
    set.delete(n);
  }

  return [...set];
};