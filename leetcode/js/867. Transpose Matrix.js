// https://leetcode.com/problems/transpose-matrix

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
  let result = new Array(matrix[0].length);
  for (let row = 0; row < result.length; row++) {
    let line = new Array(matrix.length);
    for (let col = 0; col < matrix.length; col++) {
      line[col] = matrix[col][row];
    }
    result[row] = line;
  }

  return result;
};