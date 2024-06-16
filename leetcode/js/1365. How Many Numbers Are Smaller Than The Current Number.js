// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
  let counts = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    counts[i] = nums.filter((n) => n < nums[i]).length;
  }

  return counts;
};