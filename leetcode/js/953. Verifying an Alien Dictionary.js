// https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  const map = new Map();
  for (const char of order) {
    map.set(char, map.size);
  }

  for (let i = 1; i < words.length; i++) {
    const firstWord = words[i - 1];
    const secondWord = words[i];

    const minLength = Math.min(firstWord.length, secondWord.length);
    let areWordsEqual = false;

    for (let j = 0; j < minLength; j++) {
      if (map.get(firstWord[j]) > map.get(secondWord[j])) {
        return false;
      }
      if (map.get(firstWord[j]) < map.get(secondWord[j])) {
        areWordsEqual = true;
        break;
      }
    }

    if (!areWordsEqual && firstWord.length > secondWord.length) {
      return false;
    }
  }

  return true;
};