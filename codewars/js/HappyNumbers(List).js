// https://www.codewars.com/kata/59d53c3039c23b404200007e

const sumSquareDigits = (n) => {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, digit) => acc + digit * digit, 0);
};

const happyNumbers = (n) => {
  let set = new Set([n]);
  let count = 1;
  const result = [];
  while (count <= n) {
    let next = count;
    while (next !== 1) {
      next = sumSquareDigits(next);
      if (set.has(next)) {
        break;
      }
      set.add(next);
    }
    if (next === 1) {
      result.push(count);
    }
    count++;
    set = new Set();
  }

  return result;
};