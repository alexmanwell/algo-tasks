// https://leetcode.com/problems/set-mismatch

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
  let set = new Set();
  let duplicate = 0;
  for (const n of nums) {
    if (set.has(n)) {
      duplicate = n;
    }
    set.add(n);
  }
  set = new Set();
  for (let i = 1; i <= nums.length; i++) {
    set.add(i);
  }
  for (const n of nums) {
    set.delete(n);
  }

  return [duplicate, [...set][0]];
};