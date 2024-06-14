// https://leetcode.com/problems/convert-1d-array-into-2d-array

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = (original, m, n) => {
  if (original.length !== m * n) {
    return [];
  }
  let result = new Array(m).fill([]);
  let index = 0;
  while (index <  m) {
    let line = new Array(n).fill(null);
    for (let i = index * n; i < (index + 1) * n; i++) {
      line[i % n] = original[i];
    }
    result[index] = line;
    ++index;
  }

  return result;
};