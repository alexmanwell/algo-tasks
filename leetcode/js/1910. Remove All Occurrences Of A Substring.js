// https://leetcode.com/problems/remove-all-occurrences-of-a-substring

/**
 * @param {string} letters
 * @param {string} part
 * @return {string}
 */
const removeOccurrences = (letters, part) => {
  const length = part.length;
  while (true) {
    const index = letters.indexOf(part);
    if (index !== -1) {
      letters = letters.substring(0, index) + letters.substring(index + length);
    } else {
      break;
    }
  }

  return letters;
};