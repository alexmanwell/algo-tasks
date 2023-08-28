// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

const pow = (number, degree) => Math.pow(number, degree);
const narcissistic = (value) => {
  const degree = value.toString().length;
  return value
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, item) => acc + pow(item, degree), 0) === value;
};