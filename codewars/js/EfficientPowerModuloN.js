// https://www.codewars.com/kata/52fe629e48970ad2bd0007e6

const modpow = (x, y, n) => {
  if (y === 0 || x === 1) {
    return 1;
  }

  let base = x % n;
  let result = 1;
  while (y > 0) {
    if (y % 2 === 1) {
      result = (result * base) % n;
    }
    y = y >> 1;
    base = (base * base) % n;
  }

  return result;
};