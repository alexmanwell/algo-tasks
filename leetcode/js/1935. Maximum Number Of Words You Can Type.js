// https://leetcode.com/problems/maximum-number-of-words-you-can-type

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
const canBeTypedWords = (text, brokenLetters) => {
  const words = text.split(" ");
  let count = 0;
  for (const word of words) {
    let hasBroken = false;
    for (const letter of word) {
      if (brokenLetters.includes(letter)) {
        hasBroken = true;
        break;
      }
    }
    if (!hasBroken) {
      ++count;
    }
  }

  return count;
};