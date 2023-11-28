// https://www.codewars.com/kata/5a62da60d39ec5d947000093

const findSquares = (x, y) => {
  let squares = 0;
  for (let i = 0; i < y; i++) {
    squares += (x - i) * (y - i);
  }

  return squares;
};