// https://leetcode.com/problems/longest-palindromic-substring/

const palindrome = (s, left, right) => {
  const isValid = (left, right) => left >= 0 && right < s.length;
  while (isValid(left, right) && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.slice(left + 1, right);
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const a = palindrome(s, i, i);
    const b = palindrome(s, i, i + 1);
    if (a.length > result.length) {
      result = a;
    }
    if (b.length > result.length) {
      result = b;
    }
  }

  return result;
};