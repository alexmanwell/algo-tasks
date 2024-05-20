// https://www.codewars.com/kata/525a566985a9a47bc8000670

const rotate = (matrix, direction) => {
  let result = [];
  if (direction === "clockwise") {
    for (let col = 0; col < matrix[0].length; col++) {
      let line = [];
      for (let row = matrix.length - 1; row >= 0; row--) {
        line.push(matrix[row][col]);
      }
      result.push(line);
    }
  } else {
    for (let col = matrix[0].length - 1; col >= 0; col--) {
      let line = [];
      for (let row = 0; row < matrix.length; row++) {
        line.push(matrix[row][col]);
      }
      result.push(line);
    }
  }

  return result;
};