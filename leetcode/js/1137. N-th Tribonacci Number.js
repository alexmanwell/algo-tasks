// https://leetcode.com/problems/n-th-tribonacci-number

/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
  let [prev, current, next] = [0, 1, 1];
  for (let i = 0; i < n; i++) {
    [prev, current, next] = [current, next, prev + current + next];
  }

  return prev;
};