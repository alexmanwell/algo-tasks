// https://www.codewars.com/kata/55688b4e725f41d1e9000065

const fibonacci_sequence = (n) => {
  let [current, next] = [0, 1];
  let result = [current, next];
  while (next < n) {
    [next, current] = [current + next, next];
    result.push(next);
  }

  return result;
};

const fibonacci = (max) => {
  return fibonacci_sequence(max)
    .filter(v => v % 2 === 0 && v < max)
    .reduce((acc, v) => acc + v, 0);
};