// https://leetcode.com/problems/max-pair-sum-in-an-array

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = (nums) => {
  let map = new Map();
  for (const n of nums) {
    const maxDigit = Math.max(...n.toString().split("").map(Number));
    map.set(maxDigit, map.has(maxDigit) ? [...map.get(maxDigit), n] : [n]);
  }
  const sortDecreasingKeys = [...map.entries()].sort(([k1, v1], [k2, v2]) => k2 - k1);
  let pairs = [];
  for (const [_, arr] of sortDecreasingKeys) {
    if (arr.length > 1) {
      const sorted = arr.sort((a, b) => b - a);
      pairs.push(sorted[0] + sorted[1]);
    }
  }

  return pairs.length ? Math.max(...pairs) : -1;
};