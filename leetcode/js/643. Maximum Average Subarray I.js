// https://leetcode.com/problems/maximum-average-subarray-i/description/

const computeMax = (arr, max) => {
  return Math.max(arr.reduce((acc, elem) => {
    return acc + elem;
  }), max);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  const length = nums.length;
  const sequence = nums.slice(0, k);
  let max = computeMax(sequence, Number.MIN_SAFE_INTEGER);
  for (let i = k; i < length; i++) {
    sequence.shift();
    sequence.push(nums[i]);
    max = computeMax(sequence, max);
  }

  return max / k;
};