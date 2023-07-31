// https://www.codewars.com/kata/514b92a657cdc65150000006

const solution = (number) => {
  let numbers = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numbers.push(i);
    }
  }

  return numbers.reduce((sum, el) => sum + el, 0);
};