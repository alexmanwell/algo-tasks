// https://leetcode.com/problems/sort-characters-by-frequency

/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
  let map = new Map();
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  const sorted = [...map.entries()].sort(([k1, v1], [k2, v2]) => v2 - v1);
  let sortedByCaseLetters = new Array(sorted.length);
  for (let i = 0; i < sorted.length; i++) {
    if (i < sorted.length - 1
      && sorted[i][1] === sorted[i + 1][1]
      && sorted[i][0].toLowerCase() === sorted[i + 1][0].toLowerCase()) {
      if (sorted[i][0] === sorted[i][0].toUpperCase()) {
        sortedByCaseLetters[i] = sorted[i];
        sortedByCaseLetters[i + 1] = sorted[i + 1];
      } else {
        sortedByCaseLetters[i] = sorted[i + 1];
        sortedByCaseLetters[i + 1] = sorted[i];
      }
      ++i;
    } else if (i < sorted.length - 1
      && sorted[i][1] === sorted[i + 1][1]
      && sorted[i][0] !== sorted[i + 1][0]
    ) {
      if (sorted[i][0].codePointAt(0) <= sorted[i + 1][0].codePointAt(0)) {
        sortedByCaseLetters[i] = sorted[i];
        sortedByCaseLetters[i + 1] = sorted[i + 1];
      } else {
        sortedByCaseLetters[i] = sorted[i + 1];
        sortedByCaseLetters[i + 1] = sorted[i];
      }
      ++i;
    } else {
      sortedByCaseLetters[i] = sorted[i];
    }
  }

  return sortedByCaseLetters
    .map(([k, v]) => k.repeat(v))
    .join("");
};