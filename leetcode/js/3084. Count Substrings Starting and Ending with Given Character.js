// https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character

/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
const countSubstrings = (s, c) => {
  let count = 0;
  let currentIndex = s.indexOf(c);
  let nextIndex = currentIndex - 1;
  const lastIndex = s.lastIndexOf(c);
  while (currentIndex <= lastIndex) {
    nextIndex = s.indexOf(c, nextIndex + 1);
    if (nextIndex !== -1) {
      ++count;
    } else {
      currentIndex = s.indexOf(c, currentIndex + 1);
      if (currentIndex === -1) {
        break;
      }
      nextIndex = currentIndex - 1;
    }
  }

  return count;
};