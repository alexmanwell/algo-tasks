// https://leetcode.com/problems/single-number

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  return [...map.entries()]
    .sort(([k1, v1], [k2, v2]) =>
      v1 - v2
    )[0][0];
};