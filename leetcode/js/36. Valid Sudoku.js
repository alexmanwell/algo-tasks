// https://leetcode.com/problems/valid-sudoku

const convertToNumber = (item) => {
  return !Number.isNaN(item) ? Number(item) : null
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const length = board.length;
  for (let i = 0; i < length; i++) {
    let set = new Set();
    for (let col = 0; col < length; col++) {
      const value = convertToNumber(board[i][col]);
      if (value) {
        if (set.has(value)) {
          return false;
        }
        set.add(value);
      }
    }
    set = new Set();
    for (let row = 0; row < length; row++) {
      const value = convertToNumber(board[row][i]);
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
        const value = convertToNumber(board[row][col]);
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