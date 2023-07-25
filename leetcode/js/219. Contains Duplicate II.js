// https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  let duplicates = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - duplicates.get(nums[i]) <= k) {
      return true;
    }
    duplicates.set(nums[i], i);
  }

  return false;
};