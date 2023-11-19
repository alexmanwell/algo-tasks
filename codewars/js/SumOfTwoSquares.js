// https://www.codewars.com/kata/52217066578afbcc260002d0

const allSquaredPairs = (num) => {
  const squares = [];
  for (let i = 0; i <= Math.sqrt(num / 2); i++) {
    const candidate = Math.sqrt(num - i * i);
    if (Number.isInteger(candidate)) {
      squares.push([i, candidate]);
    }
  }

  return squares;
};