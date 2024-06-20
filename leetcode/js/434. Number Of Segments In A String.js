// https://leetcode.com/problems/number-of-segments-in-a-string

/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => {
  const arr = s.split(" ");
  let count = 0;
  for (const item of arr) {
    if (item) {
      ++count;
    }
  }

  return count;
};