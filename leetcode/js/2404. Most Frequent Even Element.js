// https://leetcode.com/problems/most-frequent-even-element

/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = (nums) => {
  let map = new Map();
  for (const n of nums) {
    if (n % 2 === 0) {
      map.set(n, (map.get(n) || 0) + 1);
    }
  }

  return map.size !== 0
    ? [...map.entries()].sort(([k1, v1], [k2, v2]) => v2 - v1 || k1 - k2)[0][0]
    : -1;
};