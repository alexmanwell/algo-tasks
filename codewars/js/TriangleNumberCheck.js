// https://www.codewars.com/kata/557e8a141ca1f4caa70000a6

const isTriangleNumber = (number) => {
  if (!Number.isInteger(number)) {
    return false;
  }
  let result = 0;
  let step = 1;
  while (result < number) {
    result += step;
    step++;
  }

  return result === number;
};