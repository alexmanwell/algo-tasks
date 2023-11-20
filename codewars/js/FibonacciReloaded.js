// https://www.codewars.com/kata/52549d3e19453df56f0000fe

const fib = (n) => {
  let current = 0;
  let next = 1;
  for (let i = 0; i < n - 2; i++) {
    [next, ] = [current + next, next];
  }

  return current;
};