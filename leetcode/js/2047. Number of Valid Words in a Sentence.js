// https://leetcode.com/problems/number-of-valid-words-in-a-sentence

const isValid = (str) => {
  const length = str.length;
  let hasHyphen = false;
  for (let i = 0; i < length; i++) {
    const c = str.charAt(i);
    if (/^[0-9]$/.test(c)) {
      return false;
    }
    if (c === '-') {
      if (hasHyphen) {
        return false
      }
      hasHyphen = true;
      const prevChar = str.charAt(i - 1);
      const nextChar = str.charAt(i + 1);
      if (!/^[a-z]$/.test(prevChar) || !/^[a-z]$/.test(nextChar)) {
        return false;
      }
    }

    if (/^[!.,]$/.test(c) && i !== length - 1) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} sentence
 * @return {number}
 */
const countValidWords = (sentence) => {
  const words = sentence.trim().split(/\s+/);
  let count = 0;
  for (const word of words) {
    if (isValid(word)) {
      ++count;
    }
  }

  return count
};