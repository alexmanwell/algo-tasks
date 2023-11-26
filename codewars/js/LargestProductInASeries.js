// https://www.codewars.com/kata/529872bdd0f550a06b00026e

const greatestProduct = (input) => {
  let multiply = 0;
  for (let i = 0; i < input.length - 4; i++) {
    const numbers = input.slice(i, i + 5).split("").map(Number);
    const temp = numbers.reduce((acc, v) => acc * v, 1);
    multiply = (multiply <= temp) ? temp : multiply;
  }

  return multiply;
};