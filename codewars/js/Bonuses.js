// https://www.codewars.com/kata/5d68d05e7a60ba002b0053f6

const bonus = (arr, s) => {
  const values = [...arr];
  let numerator = 0;
  let denominator = 1;
  while (values.length) {
    const value = values.pop();
    numerator = numerator * value + denominator;
    denominator *= +value;
  }
  const common = s * denominator / numerator;
  const result = arr.map(value => Math.floor(common / value));

  return result.reduce((acc, v) => acc + v, 0) === s ? result : NaN;
};