// https://leetcode.com/problems/check-if-grid-satisfies-conditions

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const satisfiesConditions = (grid) => {
  const [rowSize, colSize] = [grid.length, grid[0].length];
  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      if (row + 1 < rowSize && grid[row][col] !== grid[row + 1][col]) {
        return false;
      }
      if (col + 1 < colSize && grid[row][col] === grid[row][col + 1]) {
        return false;
      }
    }
  }

  return true;
};