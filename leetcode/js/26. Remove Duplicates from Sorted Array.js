// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  const result = [nums[0]];
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];
    if (current !== next) {
      result.push(next);
    }
  }

  return result.length;
};