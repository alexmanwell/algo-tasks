// https://leetcode.com/problems/count-the-number-of-special-characters-i

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = (word) => {
  let letters = word.split("");
  let count = 0;
  const inverseLetter = (l) => {
    return l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase();
  }
  for (let i = 0; i < letters.length; i++) {
    const letter = inverseLetter(letters[i] || "");
    let index = letters.indexOf(letter, i + 1);
    if (index !== -1) {
      ++count;
      while (index !== -1) {
        letters[index] = null;
        index = letters.indexOf(letter, index + 1);
      }
    }
  }

  return count;
};