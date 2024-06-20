// https://leetcode.com/problems/valid-word

/**
 * @param {string} word
 * @return {boolean}
 */
const isValid = (word) => {
  if (word.length < 3) {
    return false;
  }
  let isVowel = false;
  let isConsonant = false;
  for (let c of word) {
    if (!new RegExp(/[a-zA-Z0-9]/).test(c)) {
      return false;
    }
    if (/[0-9]/.test(c)) {
      continue;
    } else if ("aeiou".includes(c.toLowerCase())) {
      isVowel = true;
    } else {
      isConsonant = true;
    }
  }

  return isVowel && isConsonant;
};