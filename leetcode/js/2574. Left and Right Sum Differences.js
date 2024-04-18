// https://leetcode.com/problems/left-and-right-sum-differences

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = (nums) => {
  let result = new Array(nums.length).fill(null);
  let leftSum = nums[0];
  let rightSum = nums.reduce((arr, n) => arr + n, 0);
  result[0] = Math.abs(rightSum - leftSum);
  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];
    result[i] = Math.abs(rightSum - leftSum);
  }

  return result;
};