// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let index = 0;
  let findIndex = -1;
  while (index < s.length) {
    findIndex = t.indexOf(s[index], findIndex + 1);
    if (findIndex === -1) {
      return false;
    }
    ++index;
  }

  return true;
};