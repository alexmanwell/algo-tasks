// https://leetcode.com/problems/repeated-substring-pattern

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  if (s.length === 1) {
    return false;
  }
  let isSameSubString = true;
  let size = 1;
  let index = 0;
  while (index < s.length - size) {
    const current = s.substring(index, index + size);
    const next = s.substring(index + size, index + 2 * size);
    if (current === next) {
      index = index + size;
      isSameSubString = true;
    } else {
      index = 0;
      ++size;
      isSameSubString = false;
    }
  }

  return isSameSubString;
};