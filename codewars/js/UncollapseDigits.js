// https://www.codewars.com/kata/5a626fc7fd56cb63c300008c

const DIGITS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

const uncollapse = (str) => {
  let result = [];
  let digit = "";
  for (let i = 0; i < str.length; i++) {
    digit += str.charAt(i);
    if (DIGITS.includes(digit)) {
      result.push(digit);
      digit = "";
    }
  }

  return result.join(" ");
};