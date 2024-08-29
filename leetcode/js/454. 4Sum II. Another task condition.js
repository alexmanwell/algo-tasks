// https://leetcode.com/problems/4sum-ii

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number[]}
 */
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      map.set(sum, map.has(sum) ? [...map.get(sum), [i, j]] : [i, j]);
    }
  }

  let result = [];
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j];
      if (map.has(-sum)) {
        result.push([...map.get(-sum), i, j]);
      }
    }
  }

  return result;
};