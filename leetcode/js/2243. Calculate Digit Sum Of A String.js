// https://leetcode.com/problems/calculate-digit-sum-of-a-string

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = (s, k) => {
  while (s.length > k) {
    let chunks = new Array(Math.ceil(s.length / k)).fill("");
    let index = 0;
    let start = 0;
    while (start < s.length) {
      chunks[index] = (start + k < s.length) ? s.substring(start, start + k) : s.substring(start);
      start += k;
      ++index;
    }
    s = chunks.map(chunk => chunk.split("").map(Number).reduce((a, b) => a + b)).join("");
  }

  return s;
};