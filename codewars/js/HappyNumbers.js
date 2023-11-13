// https://www.codewars.com/kata/5464cbfb1e0c08e9b3000b3e

const sumSquareDigits = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, digit) => acc + digit * digit, 0);
};

const isHappy = (n) => {
  const set = new Set([n]);
  let next = n;
  while (next !== 1) {
    next = sumSquareDigits(next);
    if (set.has(next)) {
      next = -1;
      break;
    }
    set.add(next);
  }

  return next === 1;
};