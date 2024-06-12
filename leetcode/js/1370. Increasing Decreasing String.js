// https://leetcode.com/problems/increasing-decreasing-string

/**
 * @param {string} s
 * @return {string}
 */
const sortString = (s) => {
  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  let sorted = [...map.entries()].sort(([k1, v1], [k2, v2]) => k1.localeCompare(k2) || v1 - v2);
  map = new Map();
  for (let [k, v] of sorted) {
    map.set(k, v);
  }
  let result = "";
  while (result.length < s.length) {
    for (let [letter, amount] of map.entries()) {
      result += letter;
      map.set(letter, amount - 1);
      if (map.get(letter) === 0) {
        map.delete(letter);
      }
    }
    const reverseLetters = Array.from(map.keys()).reverse();
    for (let letter of reverseLetters) {
      result += letter;
      map.set(letter, map.get(letter) - 1);
      if (map.get(letter) === 0) {
        map.delete(letter);
      }
    }
  }

  return result;
};