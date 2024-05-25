// https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const words = s.split(" ");
  let letters = [];
  for (const word of words) {
    let chars = [];
    for (const letter of word) {
      if (/[a-zA-Z0-9]/.test(letter)) {
        chars.push(letter.toLowerCase());
      }
    }
    letters.push(...chars);
  }

  return letters.join("") === [...letters].reverse().join("");
};