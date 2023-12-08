// https://www.codewars.com/kata/56662e268c0797cece0000bb

const sumFibs = (n) => {
  let [current, next] = [0, 1];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    [next, current] = [current + next, next];
    if (current % 2 === 0) {
      sum += current;
    }
  }

  return sum;
};