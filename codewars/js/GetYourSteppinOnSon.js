// https://www.codewars.com/kata/55e00266d494ce5155000032

const buildBoard = (row, col) => {
  return new Array(row)
    .fill([])
    .map(() =>
      new Array(col)
        .fill(" ")
    );
};

const fillCol = (board, offsetRow, offsetCol, str) => {
  const length = str ? str.length : 0;
  let i = 0;
  for (let col = offsetCol; col < offsetCol + length; col++) {
    board[offsetRow][col] = str.charAt(i);
    i++;
  }

  return board;
};

const fillRow = (board, offsetRow, offsetCol, str) => {
  const length = str ? str.length : 0;
  let i = 0;
  for (let row = offsetRow; row < offsetRow + length; row++) {
    board[row][offsetCol] = str.charAt(i);
    i++;
  }

  return board;
};

const filteredEvenItems = (str) => {
  return str
    .split(" ")
    .filter((word, index) =>
      index % 2 === 0
    );
};

const filteredOddItems = (str) => {
  return str
    .split(" ")
    .filter((word, index) =>
      index % 2 !== 0
    );
};

const size = (arr) => {
  return arr.join("").length - arr.length + 1
};

const wordStep = (str) => {
  const evenItems = filteredEvenItems(str);
  const oddItems = filteredOddItems(str);
  const rowSize = size(oddItems);
  const colSize = size(evenItems);
  let board = buildBoard(rowSize, colSize);
  let index = 0;
  let offsetRow = 0;
  let offsetCol = 0;
  const max = Math.max(evenItems.length, oddItems.length);
  while (index < max) {
    let fill = fillCol(board, offsetRow, offsetCol, evenItems[index]);
    offsetCol += evenItems[index] ? evenItems[index].length - 1 : 0;
    fill = fillRow(board, offsetRow, offsetCol, oddItems[index]);
    offsetRow += oddItems[index] ? oddItems[index].length - 1 : 0;
    index++;
  }

  return board;
};