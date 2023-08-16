function isSafe(board, row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) {
      return false;
    }
    if (col - row + i >= 0 && board[i][col - row + i] === 1) {
      return false;
    }
    if (col + row - i < board.length && board[i][col + row - i] === 1) {
      return false;
    }
  }
  return true;
}

function solveNQueensUtil(board, row) {
  if (row === board.length) {
    return [board.map(row => row.join(''))];
  }

  let solutions = [];

  for (let col = 0; col < board.length; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = 1;
      solutions = solutions.concat(solveNQueensUtil(board, row + 1));
      board[row][col] = 0;
    }
  }

  return solutions;
}

function solveNQueens(n) {
  const board = new Array(n).fill(0).map(() => new Array(n).fill(0));
  return solveNQueensUtil(board, 0);
}

function printSolutions(solutions) {
  solutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    setInterval(() => {
      solution.forEach(row => {
        console.log(row.split("").join(" "));
      });
    }, 200);
    console.log('\n');
  });
}

const solutions = solveNQueens(6);
printSolutions(solutions);