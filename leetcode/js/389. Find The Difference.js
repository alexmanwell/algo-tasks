// https://leetcode.com/problems/find-the-difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let map = new Map();
  for (const c of t) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (const c of s) {
    map.set(c, map.get(c) - 1);
    if (map.get(c) === 0) {
      map.delete(c);
    }
  }

  return [...map.entries()][0][0];
};