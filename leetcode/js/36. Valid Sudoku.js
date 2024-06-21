// https://leetcode.com/problems/valid-sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const length = board.length;
  for (let i = 0; i < length; i++) {
    let set = new Set();
    for (let col = 0; col < length; col++) {
      const value = !Number.isNaN(board[i][col]) ? Number(board[i][col]) : null;
      if (value) {
        if (set.has(value)) {
          return false;
        }
        set.add(value);
      }
    }
    set = new Set();
    for (let row = 0; row < length; row++) {
      const value = !Number.isNaN(board[row][i]) ? Number(board[row][i]) : null;
      if (value) {
        if (set.has(value)) {
          return false;
        }
        set.add(value);
      }
    }
  }
  const size = Math.sqrt(length);
  const squares = new Array(size * size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      squares[i * size + j] = [i * size, j * size];
    }
  }
  for (const [startRow, startCol] of squares) {
    let set = new Set();
    for (let row = startRow; row < startRow + size; row++) {
      for (let col = startCol; col < startCol + size; col++) {
        const value = !Number.isNaN(board[row][col]) ? Number(board[row][col]) : null;
        if (value) {
          if (set.has(value)) {
            return false;
          }
          set.add(value);
        }
      }
    }
  }

  return true;
};