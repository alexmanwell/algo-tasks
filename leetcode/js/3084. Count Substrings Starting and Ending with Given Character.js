// https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character

/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
const countSubstrings = (s, c) => {
  let count = 0;
  for (const letter of s) {
    if (letter === c) {
      ++count;
    }
  }

  let result = 0;
  for (let i = count; i > 0; i--) {
    result += i;
  }

  return result;
};