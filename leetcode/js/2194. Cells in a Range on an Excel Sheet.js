// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet

const splitExcelCells = (s) => {
  return s
    .split(":")
    .map(cell =>
      cell.split("")
    );
}

/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = (s) => {
  const [[startLetter, startNumber], [endLetter, endNumber]] = splitExcelCells(s);
  let result = [];
  for (let col = startLetter.charCodeAt(0); col <= endLetter.charCodeAt(0); col++) {
    for (let row = startNumber; row <= endNumber; row++) {
      result.push(String.fromCharCode(col) + row);
    }
  }

  return result;
};