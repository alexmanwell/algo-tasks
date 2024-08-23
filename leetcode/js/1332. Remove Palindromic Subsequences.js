// https://leetcode.com/problems/remove-palindromic-subsequences

/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = (s) => {
  let start = 0;
  let end = s.length - 1;
  while(start < end) {
    if (s[start] !== s[end]) {
      return 2;
    }
    ++start;
    --end;
  }

  return 1;
};