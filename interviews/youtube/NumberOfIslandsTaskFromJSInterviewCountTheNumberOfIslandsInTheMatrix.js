// https://www.youtube.com/watch?v=F1K-UILAfZ0&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo&index=10

const DIRECTION = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1]
];

const isValid = (row, col, rowSize, colSize) => {
  return (row >= 0 && row < rowSize) && (col >= 0 && col < colSize);
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let count = 0;
  const rowSize = grid.length;
  for (let row = 0; row < rowSize; row++) {
    const colSize = grid[row].length;
    for (let col = 0; col < colSize; col++) {
      if (grid[row][col] === "1") {
        count++;
        let stack = [[row, col]];
        grid[row][col] = null;
        while (stack.length) {
          const [row, col] = stack.pop();
          for (const [shiftRow, shiftCol] of DIRECTION) {
            const offsetRow = row + shiftRow;
            const offsetCol = col + shiftCol;
            if (isValid(offsetRow, offsetCol, rowSize, colSize) && grid[offsetRow][offsetCol] === "1") {
              grid[offsetRow][offsetCol] = null;
              stack.push([offsetRow, offsetCol]);
            }
          }
        }
      }
    }
  }

  return count;
};