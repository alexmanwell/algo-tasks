// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = (s1, s2) => {
  if (s1 === s2) {
    return true;
  }
  let indexes = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      indexes.push(i);
    }
  }
  if (indexes.length > 2) {
    return false;
  }

  return swap(s1.split(""), indexes[0], indexes[1]).join("") === s2;
};