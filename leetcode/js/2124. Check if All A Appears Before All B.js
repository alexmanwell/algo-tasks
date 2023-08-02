// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/description/

/**
 * @param {string} letters
 * @return {boolean}
 */
const checkString = (letters) => {
  for (let i = 0; i < letters.length - 1; i++) {
    if (letters.charCodeAt(i) > letters.charCodeAt(i + 1)) {
      return false;
    }
  }

  return true;
};

console.log(checkString("aaabbb"));
console.log(checkString("abab"));
console.log(checkString("bbb"));