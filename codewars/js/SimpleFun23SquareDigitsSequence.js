// https://www.codewars.com/kata/5886d65e427c27afeb0000c1

const sumSquareDigits = (num) => {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, n) => acc + n * n, 0);
};

const squareDigitsSequence = (number) => {
  let result = new Set();
  while (!result.has(number)) {
    result.add(number);
    number = sumSquareDigits(number);
  }

  return result.size + 1;
};