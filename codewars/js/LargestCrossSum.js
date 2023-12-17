// https://www.codewars.com/kata/59fc9e7ec374cbbb8a0000a7

const largestCrossSum = (matrix) => {
  let result = [];
  for (let row = 0; row < matrix.length; row++) {
    const line = matrix[row];
    const horizontalSum = line.reduce((acc, v) => acc + v, 0);
    for (let col = 0; col < line.length; col++) {
      let cell = line[col];
      let verticalSum = 0;
      for (let v = 0; v < matrix.length; v++) {
        verticalSum += matrix[v][col];
      }
      result.push(horizontalSum + verticalSum - cell);
    }
  }

  return Math.max(...result);
};