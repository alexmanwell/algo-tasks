// https://leetcode.com/problems/count-the-number-of-consistent-strings

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
  let count = 0;
  for (const word of words) {
    let hasSame = true;
    for (const letter of word) {
      if (!allowed.includes(letter)) {
        hasSame = false;
        break;
      }
    }
    if (hasSame) {
      ++count;
    }
  }

  return count;
};