// https://leetcode.com/problems/number-of-islands

const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let count = 0;
  let rowSize = grid.length;
  for (let row = 0; row < rowSize; row++) {
    let colSize = grid[row].length;
    for (let col = 0; col < colSize; col++) {
      if (grid[row][col] === "1") {
        count++;
        let stack = [[row, col]];
        grid[row][col] = null;
        const isValid = (row, col) => (row >= 0 && row < rowSize) && (col >= 0 && col < colSize);
        while (stack.length) {
          const [row, col] = stack.pop();
          for (const direction of DIRECTIONS) {
            const rowOffset = row + direction[0];
            const colOffset = col + direction[1];
            if (isValid(rowOffset, colOffset) && grid[rowOffset][colOffset] === "1") {
              stack.push([rowOffset, colOffset]);
              grid[rowOffset][colOffset] = null;
            }
          }
        }
      }
    }
  }

  return count;
};