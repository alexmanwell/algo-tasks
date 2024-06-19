// https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
const mergeArrays = (nums1, nums2) => {
  let map = new Map();
  for (let [id, value] of nums1) {
    map.set(id, value);
  }
  for (let [id, value] of nums2) {
    map.set(id, (map.get(id) || 0) + value);
  }

  return [...map.entries()].sort(([k1, v1], [k2, v2]) => k1 - k2);
};