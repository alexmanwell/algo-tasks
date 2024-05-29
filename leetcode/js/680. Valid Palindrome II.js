// https://leetcode.com/problems/valid-palindrome-ii

const isValidPalindrome = (s, l, r) => {
  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  for (let l = 0, r = s.length - 1; l < r; ++l, --r) {
    if (s[l] !== s[r]) {
      return isValidPalindrome(s, l + 1, r) || isValidPalindrome(s, l, r - 1);
    }
  }

  return true;
};