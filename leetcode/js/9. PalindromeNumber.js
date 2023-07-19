// https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const start = String(x);
  const end = String(x).split("").reverse().join("");
  return start === end;
};