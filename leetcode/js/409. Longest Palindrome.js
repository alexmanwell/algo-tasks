//https://leetcode.com/problems/longest-palindrome

/**
 * @param {string} letters
 * @return {number}
 */
const longestPalindrome = (letters) => {
  let map = new Map();
  let count = 0;
  for (let letter of letters) {
    map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1);
    if (map.get(letter) % 2 === 0) {
      count += 2;
    }
  }

  return letters.length > count ? count + 1 : count;
};