// https://leetcode.com/problems/smallest-range-i

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestRangeI = (nums, k) => {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  return Math.max(max - min - 2 * k, 0);
};