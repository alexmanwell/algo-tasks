// https://www.codewars.com/kata/59b401e24f98a813f9000026

function computeDepth(x) {
  let result = new Set();
  const AMOUNT_DIGITS = 10;
  let count = 1;
  while (result.size !== AMOUNT_DIGITS) {
    const digits = String(x * count).split("");
    for (let i = 0; i < digits.length; i++) {
      result.add(digits[i]);
    }
    count++;
  }

  return count - 1;
}