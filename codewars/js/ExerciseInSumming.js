// https://www.codewars.com/kata/52cd0d600707d0abcd0003eb



const minimumSum = (values, n) => {
  if (n === 0 || !values.length) {
    return 0;
  }
  if (n > values.length) {
    n = values.length;
  }

  return values
    .sort((a, b) => a - b)
    .slice(0, n + 1)
    .reduce((acc, v) => acc + v, 0);
};

const maximumSum = (values, n) => {
  if (n === 0 || !values.length) {
    return 0;
  }
  if (n > values.length) {
    n = values.length;
  }

  return values
    .sort((a, b) => b - a)
    .slice(0, n + 1)
    .reduce((acc, v) => acc + v, 0);
};