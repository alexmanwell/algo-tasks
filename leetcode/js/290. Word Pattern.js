// https://leetcode.com/problems/word-pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  if (new Set(pattern).size !== new Set(words).size) {
    return false
  }
  let map = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      map.set(pattern[i], words[i]);
    }
    if (map.get(pattern[i]) !== words[i]) {
      return false;
    }
  }

  return true;
};