// https://leetcode.com/problems/number-of-ways-to-split-array

/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = (nums) => {
  let count = 0;
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b);
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    rightSum -= nums[i];
    if (leftSum >= rightSum) {
      count++;
    }
  }

  return count;
};

// Another solution with using prefix sum method.
const waysToSplitArray = (nums) => {
  const length = nums.length;
  let sums = new Array(length).fill(null);
  sums[0] = nums[0]
  for (let i = 1; i < length; i++) {
    sums[i] = sums[i - 1] + nums[i];
  }
  let count = 0;
  for (let i = 0; i < length - 1; i++) {
    if (sums[i] >= sums[length - 1] - sums[i]) {
      count++;
    }
  }

  return count;
};