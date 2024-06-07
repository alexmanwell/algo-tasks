// https://leetcode.com/problems/maximum-score-after-splitting-a-string

/**
 * @param {string} s
 * @return {number}
 */
const maxScore = (s) => {
  let result = 0;
  let score = 0;
  if (s[0] === "0") {
    ++score;
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "1") {
      score++;
    }
  }

  result = Math.max(result, score);
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === "0") {
      ++score;
    } else if (s[i] === "1") {
      --score;
    }
    result = Math.max(result, score);
  }

  return result;
};