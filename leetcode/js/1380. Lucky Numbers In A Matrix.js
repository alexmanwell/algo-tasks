// https://leetcode.com/problems/lucky-numbers-in-a-matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = (matrix) => {
  const rowSize = matrix.length;
  const colSize = matrix[0].length;
  let minValues = new Array(rowSize).fill(Number.MAX_SAFE_INTEGER);
  let maxValues = new Array(colSize).fill(Number.MIN_SAFE_INTEGER);

  for (let row = 0; row < rowSize; ++row) {
    for (let col = 0; col < colSize; col++) {
      minValues[row] = Math.min(minValues[row], matrix[row][col]);
      maxValues[col] = Math.max(maxValues[col], matrix[row][col]);
    }
  }

  let results = [];
  for (let row = 0; row < rowSize; ++row) {
    for (let col = 0; col < colSize; col++) {
      if (minValues[row] === maxValues[col]) {
        results.push(minValues[row]);
      }
    }
  }

  return results;
};