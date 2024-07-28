// https://leetcode.com/problems/counting-words-with-a-given-prefix

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => {
  const size = pref.length;
  let count = 0;
  for (const word of words) {
    if (word.substring(0, size) === pref) {
      ++count;
    }
  }

  return count;
};