// https://leetcode.com/problems/keyboard-row

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const KEYBOARD_CHARS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let result = [];
  for (const word of words) {
    for (const chars of KEYBOARD_CHARS) {
      let isConsist = true;
      for (const letter of word) {
        if (!chars.includes(letter.toLowerCase())) {
          isConsist = false;
          break;
        }
      }
      if (isConsist) {
        result.push(word);
        break;
      }
    }
  }

  return result;
};