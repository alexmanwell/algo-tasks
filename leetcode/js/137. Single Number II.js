// https://leetcode.com/problems/single-number-ii

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  let unique = undefined;
  for (const [k, v] of map.entries()) {
    if (v === 1) {
      unique = k;
      break;
    }
  }
  return unique;
};