// https://www.codewars.com/kata/55ffb44050558fdb200000a4

const sumDigNthTerm = (start, pattern, amount) => {
  let sum = start;
  for (let i = 0; i < amount - 1; i++) {
    sum += pattern[i % pattern.length];
  }

  return sum.toString().split("").reduce((a, b) => +a + +b, 0);
};