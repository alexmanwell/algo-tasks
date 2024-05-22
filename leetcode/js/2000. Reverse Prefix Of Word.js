// https://leetcode.com/problems/reverse-prefix-of-word

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = (word, ch) => {
  const index = word.indexOf(ch);
  if (index === -1) {
    return word;
  }

  return word.substring(0, index + 1).split("").reverse().join("") + word.substring(index + 1);
};