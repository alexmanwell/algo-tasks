// https://www.codewars.com/kata/55f81f9aa51f9b72a200002f

const findUnique = (arr) => {
  return arr.reduce((acc, v) =>
    acc ^ v, 0
  );
};