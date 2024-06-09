// https://leetcode.com/problems/top-k-frequent-elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  let map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const sorted = [...map.entries()].sort(([k1, v1], [k2, v2]) => v2 - v1 || k1 - k2);
  let result = new Array(k);
  for (let i = 0; i < k; i++) {
    result[i] = sorted[i][0];
  }

  return result;
};