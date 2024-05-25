// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let results = new Array(n + 1).fill(0);
  results[1] = 1;
  results[2] = 2;
  for (let i = 3; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2];
  }

  return results[n];
};