// https://www.codewars.com/kata/5819f1c3c6ab1b2b28000624

const padovan = (n) => {
  let [prev, current, next] = [1n, 1n, 1n];
  for (let i = 3; i <= n; i++) {
    [prev, current, next] = [current, next, current + prev];
  }

  return n > 2 ? next : 1n;
};