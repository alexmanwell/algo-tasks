// https://www.codewars.com/kata/60fb2e158b940b00191e24fb
// TODO: Not pass all tests. Will be need to do find right solution.

const compute = (amountDigits, sum) => {
  return 9 * (Math.pow(10, amountDigits - 2) + sum);
};

const numberOfDuplicateDigits = (ndigit) => {
  let sum = 0;
  for (let i = 2; i <= ndigit; i++) {
    sum = compute(i, sum);
  }

  return BigInt(sum);
};