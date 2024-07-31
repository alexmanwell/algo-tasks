// https://leetcode.com/problems/minimum-common-value

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
  let result = -1;
  const min = Math.min(nums1[nums1.length - 1], nums2[0]);
  if (nums2[0] > min) {
    return result;
  }
  for (const n of nums1) {
    if (nums2.includes(n)) {
      result = n;
      break;
    }
  }

  return result;
};