// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = (nums) => {
  let sorted = nums.sort((a, b) => b - a);
  const sum = (arr) => {
    return arr.length ? arr.reduce((a, b) => a + b) : 0;
  }
  let result = [];
  while (sum(result) <= sum(sorted)) {
    result.push(sorted.shift());
  }

  return result;
};

console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([4, 4, 7, 6, 7]));