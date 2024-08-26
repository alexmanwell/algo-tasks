// https://leetcode.com/problems/sum-of-unique-elements

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = (nums) => {
  let map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  return [...map.entries()]
    .filter(([k, v]) => v === 1)
    .reduce((acc, [k, v]) => acc + k, 0);
};