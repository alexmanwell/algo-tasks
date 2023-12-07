// https://www.codewars.com/kata/56b7771481290cc283000f28

const lastFibDigit = (n) => {
  n = n % 60;
  let [current, next] = [1, 1];
  for (let i = 2; i <= n; i++) {
    [next, current] = [(current + next) % 10, next % 10];
  }

  return current;
};