// https://www.codewars.com/kata/525caa5c1bf619d28c000335

const isSolved = (board) => {
  const [row1, row2, row3] = board;
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

  let isZero = false;
  for (const comb of combinations) {
    if (new Set(comb).size === 1 && comb[0] !== 0) {
      return comb[0];
    }
    if (comb.includes(0)) {
      isZero = true;
    }
  }

  return isZero ? -1 : 0;
};