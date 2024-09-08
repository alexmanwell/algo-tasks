// https://leetcode.com/problems/zigzag-conversion
// TODO: This solution doesn't work correctly

const computeColumnSize = (strLength, rowSize) => {
  let size = 0;
  while (strLength > 0) {
    strLength -= rowSize;
    ++size;
    let count = 0;
    while (strLength > 0 && count < rowSize - 2) {
      ++count;
      --strLength;
      ++size;
    }
  }

  return size;
};

const fillColumns = (matrix, col, rowSize, str) => {
  if (col % (rowSize - 1) === 0) {
    for (let row = 0; row < rowSize; row++) {
      matrix[row][col] = str.charAt(col * (rowSize - 1) + row);
    }
  } else {
    for (let row = 0; row < rowSize; row++) {
      if ((rowSize - 1 - col % (rowSize)) === row) {
        matrix[row][col] = str.charAt(col * rowSize + col % rowSize);
      } else {
        matrix[row][col] = " ";
      }
    }
  }

  return matrix;
};

/**
 * @param {string} s
 * @param {number} rowSize
 * @return {string}
 */
const convert = (s, rowSize) => {
  const colSize = computeColumnSize(s.length, rowSize);
  let matrix = Array.from({length: rowSize}, () => new Array(colSize).fill(""));
  for (let col = 0; col < colSize; col++) {
    matrix = fillColumns(matrix, col, rowSize, s);
  }

  let result = "";
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      result += matrix[row][col] === " " ? "" : matrix[row][col];
    }
  }

  return result;
};

console.log(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
console.log(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
console.log(convert("PAYPALISHIRING", 5), "PINALSIGYAHRPI");
console.log(convert("A", 1), "A");