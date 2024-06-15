// https://leetcode.com/problems/reshape-the-matrix

/**
 * @param {number[][]} arr
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (arr, r, c) => {
  if (arr.length * arr[0].length !== r * c) {
    return arr;
  }
  let matrix = new Array(r);
  let row = 0;
  let col = 0;
  for (let i = 0; i < r; i++) {
    let line = new Array(c);
    for (let j = 0; j < c; j++) {
      if (col === arr[row].length) {
        ++row;
        col = 0;
      }
      line[j] = arr[row][col];
      ++col;
    }
    matrix[i] = line;
  }

  return matrix;
};