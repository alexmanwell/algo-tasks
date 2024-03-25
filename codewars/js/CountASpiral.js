// https://www.codewars.com/kata/61559bc4ead5b1004f1aba83

const spiral = (n) => {
  return n % 2n === 0n
    ? (n - 1n) / 2n + (n + 1n) * n / 2n
    : n + (n + 1n) * (n - 1n) / 2n;
};