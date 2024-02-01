// https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc
// TODO: don't pass this test [,,,O,,,X,,] - Got: -1. But my solution decide this case.

const convertToMatrix = (arr) => {
  let matrix = [];
  let line = [];
  arr.forEach((item, index) => {
    line.push({position: index, item: item});
    if (line.length === 3) {
      matrix.push(line);
      line = [];
    }
  });

  return matrix;
};

const solveTTT = (board) => {
  const [row1, row2, row3] = convertToMatrix(board);
  const col1 = [row1[0], row1[1], row1[2]];
  const col2 = [row2[0], row2[1], row2[2]];
  const col3 = [row3[0], row3[1], row3[2]];
  const leftDiagonal = [row1[0], row2[1], row3[2]];
  const rightDiagonal = [row1[2], row2[1], row3[0]];
  const combinations = [
    col1,
    col2,
    col3,
    leftDiagonal,
    rightDiagonal
  ];

  let candidate;
  for (const comb of combinations) {
    const emptyFiltered = comb.filter(v => v.item === '');
    if (comb.filter(v => v.item === 'X').length === 2
      && emptyFiltered.length === 1
    ) {
      candidate = emptyFiltered[0];
    }
  }

  return candidate ? candidate.position : -1;
};