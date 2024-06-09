// https://leetcode.com/problems/first-letter-to-appear-twice

/**
 * @param {string} s
 * @return {character}
 */
const repeatedCharacter = (s) => {
  let set = new Set();
  for (const c of s) {
    if (set.has(c)) {
      return c;
    }
    set.add(c);
  }

  return new Error(`failed input data: ${s}`);
};