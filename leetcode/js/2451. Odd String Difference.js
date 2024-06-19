// https://leetcode.com/problems/odd-string-difference
// TODO: Doesn't pass all tests.

/**
 * @param {string[]} words
 * @return {string}
 */
const oddString = (words) => {
  let map = new Map();
  for (const word of words) {
    let differences = new Array(word.length - 1);
    for (let j = 0; j < word.length - 1; j++) {
      differences[j] = word.charCodeAt(j + 1) - word.charCodeAt(j);
    }

    const key = differences.join("");
    map.set(key, map.has(key) ? [...map.get(key), word] : [word]);
  }
  for (const words of map.values()) {
    if (words.length === 1) {
      return words[0];
    }
  }

  return "";
};