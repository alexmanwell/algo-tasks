// https://leetcode.com/problems/snail-traversal/

Array.prototype.snail = function (rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
    return [];
  }
  if (rowsCount === 1) {
    return [this];
  }
  const matrix = generateMatrix(rowsCount, colsCount);
  let row = 0;
  let col = 0;
  let direction = Direction.UP;

  for (let i = 0; i < this.length; i++) {
    matrix[row][col] = this[i];
    row = direction ? row + 1 : row - 1;

    if (row === 0) {
      matrix[row][col] = this[++i];
      col++;
      direction = Direction.UP;
    }
    if (row === rowsCount - 1) {
      matrix[row][col] = this[++i];
      col++;
      direction = Direction.DOWN;
    }
  }

  return matrix;
};

const Direction = {
  UP: 1,
  DOWN: 0
};

const generateMatrix = (rows, cols) => {
  let matrix = new Array(rows);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(cols);
  }

  return matrix;
};