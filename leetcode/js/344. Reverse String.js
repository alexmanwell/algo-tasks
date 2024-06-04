// https://leetcode.com/problems/reverse-string

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  const size = s.length;
  for (let i = 0; i < Math.ceil(size / 2); i++) {
    [s[i], s[size - 1 - i]] = [s[size - 1 - i], s[i]];
  }

  return s;
};