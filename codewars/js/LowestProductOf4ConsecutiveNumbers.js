// https://www.codewars.com/kata/554e52e7232cdd05650000a0

const lowestProduct = (input) => {
  if (input.length < 4) {
    return "Number is too small";
  }

  const numbers = input.split("").map(Number);
  let result = [];
  for (let i = 0; i < numbers.length - 3; i++) {
    const multiply =
      numbers
        .slice(i, i + 4)
        .reduce((acc, v) => acc * v, 1);
    result.push(multiply);
  }

  return Math.min(...result);
};