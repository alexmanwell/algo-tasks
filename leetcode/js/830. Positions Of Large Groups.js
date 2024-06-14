// https://leetcode.com/problems/positions-of-large-groups

/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = (s) => {
  let index = 0;
  let positions = [];
  while (index < s.length) {
    const start = index;
    let end = start;
    while (s[index] === s[end + 1]) {
      ++end;
    }
    if (end - start >= 2) {
      positions.push([start, end]);
    }
    index = end + 1;
  }

  return positions;
};