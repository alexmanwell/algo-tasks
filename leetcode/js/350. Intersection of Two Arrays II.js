// https://leetcode.com/problems/intersection-of-two-arrays-ii

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      result.push(nums1[i]);
      const index = nums2.findIndex((elem) => elem === nums1[i]);
      nums2 = [...nums2.slice(0, index), ...nums2.slice(index + 1)];
    }
  }

  return result;
};