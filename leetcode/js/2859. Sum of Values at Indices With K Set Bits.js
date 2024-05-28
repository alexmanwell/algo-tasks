// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumIndicesWithKSetBits = (nums, k) => {
  let bits = new Array(nums.length).fill("");
  for (let i = 0; i < nums.length; i++) {
    bits[i] = i.toString(2);
  }
  let sum = 0;
  for (let i = 0; i < bits.length; i++) {
    const count = bits[i].split("").reduce((acc, d) => d === "1" ? ++acc : acc, 0);
    sum += (count === k) ? nums[i] : 0;
  }

  return sum;
};