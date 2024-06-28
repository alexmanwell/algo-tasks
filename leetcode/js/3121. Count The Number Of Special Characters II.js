// https://leetcode.com/problems/count-the-number-of-special-characters-ii
// TODO: doesn't pass tests (time limit).

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = (word) => {
  let letters = word.split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if ((letters[i] && letters[i] === letters[i].toLowerCase())) {
      const letter = letters[i].toUpperCase();
      let index = letters.lastIndexOf(letters[i], i + 1);
      index = letters.indexOf(letter, i + 1);
      if (index !== -1) {
        const afterIndex = letters.indexOf(letters[i], index + 1);
        if (afterIndex === -1) {
          ++count;
          while (index !== -1) {
            letters[index] = null;
            index = letters.indexOf(letter, index + 1);
          }
        } else {
          while (index !== -1) {
            letters[index] = null;
            index = letters.indexOf(letter, index + 1);
          }
        }
      }
    } else {
      let index = i;
      const letter = letters[index];
      while (index !== -1) {
        letters[index] = null;
        index = letters.indexOf(letter, index + 1);
      }

    }
  }

  return count;
};