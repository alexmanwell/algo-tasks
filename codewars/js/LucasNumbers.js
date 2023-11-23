// https://www.codewars.com/kata/55a7de09273f6652b200002e

const positiveLukas = (current, next, target) => {
  for (let i = 0; i < target; i++) {
    [next, current] = [current + next, next];
  }

  return current;
};

const negativeeLukas = (current, next, target) => {
  for (let i = 0; i < target; i++) {
    [current, next] = [next - current, current];
  }

  return current
};

const lucasnum = (n) => {
  return n >= 0
    ? positiveLukas(2, 1, n)
    : negativeeLukas(2, 1, Math.abs(n));
};