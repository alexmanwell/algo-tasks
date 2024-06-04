// https://leetcode.com/problems/score-of-a-string

/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = (s) => {
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i));
  }

  return sum;
};