// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = (matrix) => {
  const size = matrix.length;
  let rows = Array.from({length: size}, () => new Array(size).fill(false));
  let cols = Array.from({length: size}, () => new Array(size).fill(false));
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const value = matrix[row][col] - 1;
      if (rows[row][value] || cols[col][value]) {
        return false;
      }
      rows[row][value] = true;
      cols[col][value] = true;
    }
  }

  return true;
};