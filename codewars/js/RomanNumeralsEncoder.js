// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

const DECIMAL = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const ROMAN = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const solution = (number) => {
  const result = [];
  DECIMAL.forEach((value, index) => {
    while (number >= value) {
      result.push(ROMAN[index]);
      number -= value;
    }
  });

  return result.join("");
};