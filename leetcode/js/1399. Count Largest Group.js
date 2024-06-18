// https://leetcode.com/problems/count-largest-group

const sumDigits = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
}

/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = (n) => {
  let map = new Map();
  for (let i = 1; i <= n; i++) {
    const sum = sumDigits(i);
    map.set(sum, map.has(sum) ? [...map.get(sum), i] : [i]);
  }

  const arrays = [...map.values()];
  const max = Math.max(...arrays.map((arr) => arr.length));
  return arrays
    .filter((arr) => arr.length === max)
    .length;
};