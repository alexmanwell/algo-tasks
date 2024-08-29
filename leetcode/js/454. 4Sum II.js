// https://leetcode.com/problems/4sum-ii

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  let map = new Map();
  for (const n of nums1) {
    for (const m of nums2) {
      const sum = n + m;
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }
  let count = 0;
  for (const n of nums3) {
    for (const m of nums4) {
      const sum = n + m;
      count += map.has(-sum) ? map.get(-sum) : 0;
    }
  }

  return count;
};