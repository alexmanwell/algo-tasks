// https://www.codewars.com/kata/58311536e77f7d08de000085

const countCows = (n) => {
  if (!Number.isInteger(n)) {
    return null;
  }
  if (n < 3) {
    return 1;
  }

  return countCows(n - 1) + countCows(n - 3);
};

// iterative solution.
const countCows = (n) => {
  if (!Number.isInteger(n)) {
    return null;
  }
  let [prev, current, next] = [1, 1, 1];
  for (let i = 3; i <= n; i++) {
    [prev, current, next] = [current, next, prev + next];
  }

  return next;
};