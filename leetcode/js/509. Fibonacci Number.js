// https://leetcode.com/problems/fibonacci-number

/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  let [current, next] = [0, 1];
  for (let i = 0; i < n; i++) {
    [current, next] = [next, current + next];
  }

  return current;
};