// https://www.codewars.com/kata/5d339b01496f8d001054887f

const findX = (n) => {
  n = BigInt(n);
  return Number(3n * (2n ** (n + 1n) - (n + 2n)) % (10n ** 9n + 7n));
};