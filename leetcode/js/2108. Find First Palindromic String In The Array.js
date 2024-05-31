// https://leetcode.com/problems/find-first-palindromic-string-in-the-array

String.prototype.reverse = function () {
  return this
    .split("")
    .reverse()
    .join("");
}

/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = (words) => {
  let palindrome = "";
  for (let word of words) {
    if (word === word.reverse()) {
      palindrome = word;
      break;
    }
  }

  return palindrome;
};