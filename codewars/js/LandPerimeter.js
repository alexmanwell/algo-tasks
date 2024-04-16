// https://www.codewars.com/kata/5839c48f0cf94640a20001d3
// TODO: Задача почти решена, необходимо правильно рассчитать периметр. Есть случаи, когда площадь многоугольника представляет из себя квадрат(ы).

const DIRECTION = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

const isValid = (row, col, rowSize, colSize) => {
  return (row >= 0 && row < rowSize) && (col >= 0 && col < colSize);
}

const landPerimeter = (arr) => {
  let board = [];
  for (let items of arr) {
    const cells = items.split("");
    board.push(cells);
  }
  let islands = [];
  const rowSize = board.length;
  for (let row = 0; row < rowSize; row++) {
    const colSize = board[row].length;
    for (let col = 0; col < colSize; col++) {
      if (board[row][col] === "X") {
        let island = [[row, col]];
        board[row][col] = "O";
        let stack = [[row, col]];
        while (stack.length) {
          let [row, col] = stack.pop();
          for (let [adjRow, adjCol] of DIRECTION) {
            let offsetRow = row + adjRow;
            let offsetCol = col + adjCol;
            if (isValid(offsetRow, offsetCol, rowSize, colSize) && board[offsetRow][offsetCol] === "X") {
              island.push([offsetRow, offsetCol]);
              board[offsetRow][offsetCol] = "O";
              stack.push([offsetRow, offsetCol]);
            }
          }
        }
        islands.push(island);
      }
    }
  }

  const perimeter = islands.reduce((acc, n) => acc + 4 + 2 * (n - 1), 0);
  return `Total land perimeter: ${perimeter}`;
};