// https://www.codewars.com/kata/5818d00a559ff57a2f000082

const pell = (n) => {
  if (n === 0) {
    return 0n;
  }

  let prev = 0n;
  let current = 1n;
  let next = 0n;
  for (let i = 0; i < n - 1; i++) {
    next = 2n * current + prev;
    prev = current;
    current = next;
  }

  return current;
};