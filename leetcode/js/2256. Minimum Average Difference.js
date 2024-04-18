// https://leetcode.com/problems/minimum-average-difference

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = (nums) => {
  const size = nums.length;
  let prefixSum = new Array(size).fill(null);
  prefixSum[0] = nums[0];
  for (let i = 1; i < size; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  const totalSum = prefixSum[size - 1];
  let [min, index] = [Number.MAX_SAFE_INTEGER, 0];
  for (let i = 0; i < size; i++) {
    const a = Math.floor(prefixSum[i] / (i + 1));
    const b = i !== size - 1 ? Math.floor((totalSum - prefixSum[i]) / (size - (i + 1))) : 0;
    const diff = Math.abs(a - b);
    if (min > diff) {
      min = diff;
      index = i;
    }
  }

  return index;
};