// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

const DIRECTIONS = {
  UP: -1,
  DOWN: 1,
  RIGHT: 1,
  LEFT: -1
};

const countElements = array => {
  return array.length * array[0].length;
};

const snail = (array) => {
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array.length - 1;
  let count = 0;
  let direction = DIRECTIONS.RIGHT;
  const length = countElements(array);
  const result = new Array(length);
  while (count <= length - 1) {
    if (direction === DIRECTIONS.RIGHT) {
      for (let col = startCol; col <= endCol; col++) {
        result[count] = array[startRow][col];
        count++;
      }
      startRow += 1;
      direction = DIRECTIONS.DOWN;
    }
    if (direction === DIRECTIONS.DOWN) {
      for (let row = startRow; row <= endRow; row++) {
        result[count] = array[row][endCol];
        count++;
      }
      endCol -= 1;
      direction = DIRECTIONS.LEFT;
    }
    if (direction === DIRECTIONS.LEFT) {
      for (let col = endCol; col >= startCol; col--) {
        result[count] = array[endRow][col];
        count++;
      }
      endRow -= 1;
      direction = DIRECTIONS.UP;
    }
    if (direction === DIRECTIONS.UP) {
      for (let row = endRow; row >= startRow; row--) {
        result[count] = array[row][startCol];
        count++;
      }
      startCol += 1;
      direction = DIRECTIONS.DOWN;
    }
  }

  return result;
};