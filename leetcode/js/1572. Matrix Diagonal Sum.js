// https://leetcode.com/problems/matrix-diagonal-sum

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const diagonalSum = (matrix) => {
  let sum = 0;
  const size = matrix.length;
  for (let row = 0; row < size; row++) {
    sum += matrix[row][row] + matrix[row][size - 1 - row];
  }

  if (size % 2 === 1) {
    const averageIndex = Math.floor(size / 2);
    sum -= matrix[averageIndex][averageIndex];
  }

  return sum;
};