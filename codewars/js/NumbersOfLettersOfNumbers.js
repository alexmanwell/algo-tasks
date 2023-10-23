// https://www.codewars.com/kata/599febdc3f64cd21d8000117

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const isEquilibrium = (str) => {
  return numbers[str.length] === str;
};

const numbersOfLetters = (integer) => {
  let digitFromLetter = "";
  const result = [];
  while (!isEquilibrium(digitFromLetter)) {
    let digits = integer.toString().split("").map(Number);
    digitFromLetter = digits.map((digit) => numbers[digit]).join("");
    result.push(digitFromLetter);
    integer = digitFromLetter.length;
  }

  return result;
};