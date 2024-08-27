// https://leetcode.com/problems/find-common-elements-between-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const findIntersectionValues = (nums1, nums2) => {
  const countMatches = (arr1, arr2) => {
    return arr1.reduce((acc, n) => {
      return arr2.includes(n) ? acc + 1 : acc
    }, 0);
  }

  return [
    countMatches(nums1, nums2),
    countMatches(nums2, nums1)
  ];
};