// https://leetcode.com/problems/unique-number-of-occurrences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  let map = new Map();
  for (const n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  let isUnique = true;
  let set = new Set();
  for (const n of map.values()) {
    if (set.has(n)) {
      isUnique = false;
      break;
    }
    set.add(n);
  }

  return isUnique;
};