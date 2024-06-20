// https://leetcode.com/problems/detect-capital

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  const substr = word.substring(1);
  const isUpperCase = substr === substr.toUpperCase();
  const isLowerCase = substr === substr.toLowerCase();

  return (word[0] === word[0].toUpperCase() && isUpperCase) || isLowerCase;
};