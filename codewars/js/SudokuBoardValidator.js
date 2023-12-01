// https://www.codewars.com/kata/63d1bac72de941033dbf87ae

const BOARD_SIZE = 9;

const validValues = (n) => {
  return n > 0 && n < 10;
};

const validRow = (board) => {
  for (let row = 0; row < board.length; row++) {
    const line = board[row];
    if (line.length !== new Set(line).size) {
      return false;
    }
  }

  return true;
};

const validCol = (board) => {
  for (let col = 0; col < board.length; col++) {
    let line = new Set();
    for (let row = 0; row < board[col].length; row++) {
      if (!validValues(board[row][col])) {
        return false;
      }
      line.add(board[row][col]);
    }
    if (line.size !== BOARD_SIZE) {
      return false;
    }
  }

  return true;
};

const subBoardMultipliers = (size) => {
  let multipliers = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      multipliers.push([i, j]);
    }
  }

  return multipliers;
};

const validSubBoard = (board) => {
  const size = Math.sqrt(BOARD_SIZE);
  const multipliers = subBoardMultipliers(size);
  for (let [a, b] of multipliers) {
    const rowStart = a * size;
    const colStart = b * size;
    let values = new Set();
    for (let row = rowStart; row < rowStart + size; row++) {
      for (let col = colStart; col < colStart + size; col++) {
        values.add(board[row][col]);
      }
    }
    if (values.size !== BOARD_SIZE) {
      return false;
    }
  }

  return true;
};

const validateSudoku = (board) => {
  return validCol(board)
      && validRow(board)
      && validSubBoard(board);
};