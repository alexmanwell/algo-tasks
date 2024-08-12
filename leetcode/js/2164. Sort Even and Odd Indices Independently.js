// https://leetcode.com/problems/sort-even-and-odd-indices-independently

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortEvenOdd = (nums) => {
  const sortedOdds = nums.filter((n, i) => i % 2 !== 0).sort((a, b) => b - a);
  const sortedEvens = nums.filter((n, i) => i % 2 === 0).sort((a, b) => a - b);
  let result = new Array(nums.length).fill(undefined);
  for (let i = 0; i < result.length; i++) {
    result[i] = i % 2 === 0 ? sortedEvens[i / 2] : sortedOdds[Math.ceil(i / 2) - 1];
  }

  return result;
};