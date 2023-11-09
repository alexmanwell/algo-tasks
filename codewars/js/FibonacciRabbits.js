// https://www.codewars.com/kata/5559e4e4bbb3925164000125

const fib_rabbits = (n, b) => {
  let prev = 0;
  let current = 1;
  let next = 0;
  for (let i = 0; i < n; i++) {
    next = current + prev * b;
    prev = current;
    current = next;
  }

  return prev;
};