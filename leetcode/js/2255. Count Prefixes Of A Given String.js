// https://leetcode.com/problems/count-prefixes-of-a-given-string

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
const countPrefixes = (words, s) => {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const candidate = words[i];
    if (s.substring(0, candidate.length) === candidate) {
      ++count;
    }
  }

  return count;
};