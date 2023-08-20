// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f

const sumDigits = (number) => {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = parseInt(number / 10);
  }
  return sum;
};

const twistedSum = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += sumDigits(i);
  }
  return result;
};