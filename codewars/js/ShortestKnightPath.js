// https://www.codewars.com/kata/549ee8b47111a81214000941

const FIELD_SIZE = 8;
const CHESS = ["a", "b", "c", "d", "e", "f", "g", "h"];

const DIRECTION_MOVIES = {
  UP_RIGHT: [2, 1],
  UP_LEFT: [2, -1],
  LEFT_UP: [1, -2],
  LEFT_DOWN: [-1, -2],
  DOWN_LEFT: [-2, -1],
  DOWN_RIGHT: [-2, 1],
  RIGHT_DOWN: [-1, 2],
  RIGHT_UP: [1, 2]
};

const convertToBoardPosition = (position) => {
  const pos = position.split("");
  return [CHESS.indexOf(pos[0]), parseInt(pos[1]) - 1];
};

const isValidMovie = (row, col) => {
  return row >= 0 && row < FIELD_SIZE && col >= 0 && col < FIELD_SIZE;
};

const knight = (start, finish) => {
  const chessboard = new Array(FIELD_SIZE).fill([]).map(() => new Array(FIELD_SIZE).fill(null));
  start = convertToBoardPosition(start);
  chessboard[start[0]][start[1]] = 0;
  finish = convertToBoardPosition(finish);
  const stack = [{pos: start, step: 0}];
  while (!chessboard[finish[0][finish[1]]]) {
    const knight = stack.shift();
    const step = knight.step + 1;
    for (let direction of Object.keys(DIRECTION_MOVIES)) {
      const shiftRow = knight.pos[0] + DIRECTION_MOVIES[direction][0];
      const shiftCol = knight.pos[1] + DIRECTION_MOVIES[direction][1];
      if ((shiftRow === finish[0]) && (shiftCol === finish[1])) {
        chessboard[finish[0][finish[1]]] = step;
        break;
      } else if (isValidMovie(shiftRow, shiftCol)) {
        chessboard[shiftRow][shiftCol] = step;
        stack.push({pos: [shiftRow, shiftCol], step: step});
      }
    }
  }

  return chessboard[finish[0][finish[1]]];
};