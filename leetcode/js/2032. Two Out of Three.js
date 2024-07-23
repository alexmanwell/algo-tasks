// https://leetcode.com/problems/two-out-of-three

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
const twoOutOfThree = (nums1, nums2, nums3) => {
  let counts = new Array(101).fill(0);
  new Set(nums1).forEach(val => counts[val]++);
  new Set(nums2).forEach(val => counts[val]++);
  new Set(nums3).forEach(val => counts[val]++);
  const result = [];
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > 1) {
      result.push(i);
    }
  }

  return result;
};