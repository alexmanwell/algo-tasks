// https://leetcode.com/problems/split-the-array

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossibleToSplit = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let nums1 = [];
  let nums2 = [];
  next:
    for (const num of nums) {
      if (!nums1.includes(num) && nums1.length <= nums2.length) {
        nums1.push(num);
        continue next;
      }
      if (!nums2.includes(num)) {
        nums2.push(num);
        continue next;
      }
    }

  return (
    nums1.length === nums2.length
    &&
    nums1.length === nums.length / 2
  );
};