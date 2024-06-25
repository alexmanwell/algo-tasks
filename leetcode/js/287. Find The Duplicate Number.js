// https://leetcode.com/problems/find-the-duplicate-number

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  let set = new Set();
  let duplicate = 0;
  for (const n of nums) {
    if (set.has(n)) {
      duplicate = n;
      break;
    }
    set.add(n);
  }

  return duplicate;
};