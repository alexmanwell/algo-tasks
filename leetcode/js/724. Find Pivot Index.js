// https://leetcode.com/problems/find-pivot-index

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let index = 0;
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b) - nums[0];
  if (leftSum === rightSum) {
    return index;
  }
  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];
    if (leftSum === rightSum) {
      index = i;
      break;
    }
  }

  return index ? index : -1;
};