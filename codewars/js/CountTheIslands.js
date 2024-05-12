// https://www.codewars.com/kata/55a4f1f67157d8cbe200007b

const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [-1, -1],
  [-1, 1],
  [1, 1],
  [1, -1]
];

const isValid = (i, size) => {
  return i >= 0 && i < size;
}

const countIslands = (image) => {
  let count = 0;
  const rowSize = image.length;
  for (let row = 0; row < rowSize; row++) {
    const colSize = image[row].length;
    for (let col = 0; col < colSize; col++) {
      if (image[row][col] === 1) {
        let stack = [[row, col]];
        image[row][col] = -1;
        ++count;
        while (stack.length) {
          const point = stack.pop();
          for (let direction of DIRECTIONS) {
            const rowOffset = point[0] + direction[0];
            const colOffset = point[1] + direction[1];
            if (isValid(rowOffset, rowSize)
              && isValid(colOffset, colSize)
              && image[rowOffset][colOffset] === 1) {
              stack.push([rowOffset, colOffset]);
              image[rowOffset][colOffset] = -1;
            }
          }
        }
      }
    }
  }

  return count;
};