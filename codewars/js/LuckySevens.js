// https://www.codewars.com/kata/58275b63083e128edb00098d

const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];

const isValid = (index, size) => {
  return index >= 0 && index < size;
};

const isCube = (number) => {
  for (let i = 0; i <= Math.sqrt(number); i++) {
    if (Math.pow(i, 3) === number) {
      return true;
    }
  }

  return false;
};

const luckySevens = (arr) => {
  const size = arr.length;
  let count = 0;
  for (let row = 0; row < size; row++) {
    let index = 0;
    while (index < size) {
      let col = arr[row].indexOf(7, index);
      if (col >= 0) {
        index = col;
        let sum = 0;
        for (let direction of DIRECTIONS) {
          const rowOffset = row + direction[0];
          const colOffset = col + direction[1];
          if (isValid(rowOffset, size) && isValid(colOffset, size)) {
            sum += arr[rowOffset][colOffset];
          }
        }
        count = isCube(sum) ? count + 1 : count;
      }
      index++;
    }
  }

  return count;
};