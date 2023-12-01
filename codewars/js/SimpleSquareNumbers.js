// https://www.codewars.com/kata/5edc8c53d7cede0032eb6029

const solve = (n) => {
  let result = -1;
  for (let i = 1; i < n; i++) {
    const value = n + i * i;
    if (Number.isInteger(Math.sqrt(value))) {
      result = i * i;
      break;
    }
  }

  return result;
};