// https://leetcode.com/problems/sort-array-by-increasing-frequency

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
  let map = new Map();
  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const sorted = [...map.entries()].sort(([k1, v1], [k2, v2]) => v1 - v2 || k2 - k1)
  let result = new Array(nums.length).fill(null);
  let index = 0;
  for (let [k, v] of sorted) {
    let count = 0;
    while (count < v) {
      result[index] = k;
      ++index;
      ++count;
    }
  }

  return result;
};