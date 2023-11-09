// https://www.codewars.com/kata/52fba2a9adcd10b34300094c

const transpose = (matrix) => {
  const rowSize = matrix.length;
  const colSize = matrix[0].length;
  let tMatrix = new Array(colSize).fill([]);
  for (let col = 0; col < colSize; col++) {
    let array = [];
    for (let row = 0; row < rowSize; row++) {
      array[row] = matrix[row][col];
    }
    tMatrix[col] = array;
  }

  return tMatrix;
};