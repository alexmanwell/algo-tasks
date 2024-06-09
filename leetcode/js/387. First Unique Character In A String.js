// https://leetcode.com/problems/first-unique-character-in-a-string

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  let index = -1;
  for (const c of s) {
    const firstIndex = s.indexOf(c);
    const lastIndex = s.lastIndexOf(c);
    if (firstIndex === lastIndex) {
      index = firstIndex
      break;
    }
  }

  return index;
};