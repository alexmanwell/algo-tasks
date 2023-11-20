// https://www.codewars.com/kata/55ffb44050558fdb200000a4

const sumDigits = (number) => {
  let sum = 0;
  while (number !== 0) {
    sum += number % 10;
    number = parseInt(number / 10);
  }

  return sum;
};

const sumDigNthTerm = (start, pattern, amount) => {
  let sequence = new Array(amount).fill(0);
  let sum = start;
  sequence[0] = sum;
  let count = 1;
  while (count < amount) {
    for (let i = 0; i < pattern.length && count < amount; i++) {
      sum += pattern[i];
      sequence[count] = sum;
      count++;
    }
  }

  return sumDigits(sequence[sequence.length - 1]);
};