// https://leetcode.com/problems/count-the-number-of-special-characters-ii

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = (word) => {
  let letters = word.split("");
  let count = 0;
  let set = new Set();
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const lowerLetter = letters[i].toLowerCase();
    if (!set.has(lowerLetter) && letter === lowerLetter) {
      set.add(letter);
      const lastIndex = letters.lastIndexOf(letter)
      const upperIndex = letters.indexOf(letter.toUpperCase());
      if (lastIndex < upperIndex) {
        ++count;
      }
    }
  }

  return count;
};