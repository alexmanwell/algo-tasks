// https://www.codewars.com/kata/58663693b359c4a6560001d6

const DIRECTIONS = {
  "N": [-1, 0],
  "S": [1, 0],
  "W": [0, -1],
  "E": [0, 1]
};

const POINTS = {
  "START": 2,
  "END": 3,
  "WALL": 1
};

const GAME_STATE = {
  "FINISH": "Finish",
  "DEAD": "Dead",
  "LOST": "Lost"
};

const findPosition = (matrix, point) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === point) {
        return [row, col];
      }
    }
  }

  return [];
};

const validRow = (row, size) => {
  return row >= 0 && row < size;
};

const validCol = (col, size) => {
  return col >= 0 && col < size;
};

const mazeRunner = (maze, path) => {
  const size = maze.length;
  const start = findPosition(maze, POINTS.START);
  const end = findPosition(maze, POINTS.END);
  let [row, col] = [start[0], start[1]];
  for (let dir of path) {
    row += DIRECTIONS[dir][0];
    col += DIRECTIONS[dir][1];
    if (!validRow(row, size) || !validCol(col, size)) {
      return GAME_STATE.DEAD;
    }
    if (maze[row][col] === POINTS.WALL) {
      return GAME_STATE.DEAD;
    }
    if (end[0] === row && end[1] === col) {
      return GAME_STATE.FINISH;
    }
  }

  return GAME_STATE.LOST;
};